use hdk::prelude::*;
use holo_hash::{WasmHash, EntryHashB64};

use crate::utils;

#[hdk_entry(id = "zome")]
pub struct ZomeDef {
    name: String,
    wasm_file: EntryHashB64,
    components_bundle_file: Option<EntryHashB64>,
    wasm_hash: Option<WasmHash>,
    entry_defs: Vec<String>,
    required_properties: Vec<String>, // TODO: change to map, with property types
    required_membrane_proof: bool,
}

#[hdk_extern]
pub fn publish_zome(zome: ZomeDef) -> ExternResult<EntryHashB64> {
    create_entry(&zome)?;

    let zome_hash = hash_entry(&zome)?;

    let path = all_zomes_path();
    path.ensure()?;

    let link_tag: LinkTag = match zome.wasm_hash {
        Some(wasm_hash) => {
            let bytes: SerializedBytes = wasm_hash.try_into()?;
            LinkTag::from(bytes.bytes().clone())
        }
        None => LinkTag::from(()),
    };
    create_link(path.hash()?, zome_hash.clone(), link_tag)?;

    Ok(EntryHashB64::from(zome_hash))
}

#[hdk_extern]
pub fn get_zome_def(zome_def_hash: EntryHashB64) -> ExternResult<ZomeDef> {
    let zome_def = utils::try_get_and_convert(zome_def_hash.into())?;

    Ok(zome_def)
}

#[derive(Serialize, Debug, Deserialize)]
pub struct HashedZomeDef {
    hash: EntryHashB64,
    content: ZomeDef,
}
#[derive(Serialize, Debug, Deserialize)]
pub struct GetZomesOutput(Vec<HashedZomeDef>);
#[hdk_extern]
pub fn get_all_zome_defs(_: ()) -> ExternResult<GetZomesOutput> {
    let path = all_zomes_path();
    let zomes_defs: Vec<(EntryHashB64, ZomeDef)> =
        utils::get_links_and_load_type(path.hash()?, None)?;

    let result = zomes_defs
        .into_iter()
        .map(|def| HashedZomeDef {
            hash: def.0,
            content: def.1,
        })
        .collect();

    Ok(GetZomesOutput(result))
}

/** Helper functions */

fn all_zomes_path() -> Path {
    Path::from("all_zomes")
}
