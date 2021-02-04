use hc_utils::{WrappedDnaHash, WrappedEntryHash};
use hdk3::{hash_path::path::Component, prelude::*};
use std::convert::TryFrom;

use crate::utils;

#[derive(Serialize, Debug, SerializedBytes, Deserialize, Clone)]
pub struct ZomeDefReference {
    name: String,
    zome_def_hash: WrappedEntryHash, // TODO: fix this
}

#[hdk_entry(id = "dna_template")]
pub struct DnaTemplate {
    name: String,
    zome_defs: Vec<ZomeDefReference>,
}

// This goes as link tag from a dna path to the template dna
#[derive(Serialize, Debug, Deserialize, Clone, SerializedBytes)]
pub struct InstantiatedDnaTag {
    uuid: String,
    properties: SerializedBytes, // TODO: fix this
}

#[derive(Serialize, Debug, Deserialize, Clone)]
pub struct PublishInstantiatedDnaInput {
    dna_template_hash: WrappedEntryHash,
    instantiated_dna_hash: WrappedDnaHash,
    uuid: String,
    properties: SerializedBytes, // TODO: fix this
}

#[hdk_extern]
pub fn publish_dna_template(dna_template: DnaTemplate) -> ExternResult<WrappedEntryHash> {
    create_entry(&dna_template)?;

    let hash = hash_entry(&dna_template)?;

    Ok(WrappedEntryHash(hash))
}

#[hdk_extern]
pub fn publish_instantiated_dna(input: PublishInstantiatedDnaInput) -> ExternResult<()> {
    let path = path_for_dna(input.instantiated_dna_hash);

    path.ensure()?;

    let tag = InstantiatedDnaTag {
        uuid: input.uuid,
        properties: input.properties,
    };
    let tag_bytes: SerializedBytes = tag.try_into()?;
    create_link(
        path.hash()?,
        input.dna_template_hash.0,
        tag_bytes.bytes().clone(),
    )?;

    Ok(())
}

#[derive(Serialize, Debug, Deserialize, Clone)]
pub struct GetInstantiatedDnasOutput(Vec<String>);
#[hdk_extern]
pub fn get_all_instantiated_dnas(_: ()) -> ExternResult<GetInstantiatedDnasOutput> {
    let path = Path::from("all_instantiated_dnas");

    let children = path.children()?;

    let instantiated_dnas_hashes = children
        .into_inner()
        .into_iter()
        .map(|link| {
            let child_path = Path::try_from(&link.tag)?;

            let components: Vec<Component> = child_path.into();

            let hash: String = components.last().unwrap().try_into()?;

            Ok(hash)
        })
        .collect::<ExternResult<Vec<String>>>()?;

    Ok(GetInstantiatedDnasOutput(instantiated_dnas_hashes))
}

#[hdk_extern]
pub fn get_dna_template(dna_template_hash: WrappedEntryHash) -> ExternResult<DnaTemplate> {
    utils::try_get_and_convert(dna_template_hash.0)
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct GetTemplateOutput {
    dna_template: DnaTemplate,
    properties: SerializedBytes,
    uuid: String,
}
#[hdk_extern]
pub fn get_template_for_dna(dna_hash: WrappedDnaHash) -> ExternResult<GetTemplateOutput> {
    let path = path_for_dna(dna_hash);
    let links = get_links(path.hash()?, None)?;

    let link = links
        .into_inner()
        .first()
        .ok_or(crate::err("There is no template for this dna"))?
        .clone();

    let bytes: SerializedBytes = UnsafeBytes::from(link.tag.0).into();
    let tag: InstantiatedDnaTag = bytes.try_into()?;

    let dna_template: DnaTemplate = utils::try_get_and_convert(link.target)?;
    Ok(GetTemplateOutput {
        dna_template,
        properties: tag.properties,
        uuid: tag.uuid,
    })
}

/** Helper functions */

fn path_for_dna(dna_hash: WrappedDnaHash) -> Path {
    Path::from(format!("all_instantiated_dnas.{}", dna_hash.0))
}
