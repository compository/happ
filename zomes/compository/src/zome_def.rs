use hc_utils::WrappedEntryHash;
use hdk3::prelude::*;
use holo_hash::WasmHash;

use crate::utils;

#[hdk_entry(id = "zome")]
pub struct ZomeDef {
    name: String,
    wasm_file: WrappedEntryHash,
    components_bundle_file: Option<WrappedEntryHash>,
    wasm_hash: WasmHash,
    entry_defs: Vec<String>,
    required_properties: Vec<String>, // TODO: change to map, with property types
    required_membrane_proof: bool,
}

#[hdk_extern]
pub fn publish_zome(zome: ZomeDef) -> ExternResult<WrappedEntryHash> {
    create_entry(&zome)?;

    let zome_hash = hash_entry(&zome)?;

    let path = all_zomes_path();
    path.ensure()?;

    let bytes: SerializedBytes = zome.wasm_hash.try_into()?;
    create_link(path.hash()?, zome_hash.clone(), bytes.bytes().clone())?;

    Ok(WrappedEntryHash(zome_hash))
}

#[hdk_extern]
pub fn get_zome_def(zome_def_hash: WrappedEntryHash) -> ExternResult<ZomeDef> {
    let zome_def = utils::try_get_and_convert(zome_def_hash.0)?;

    Ok(zome_def)
}

#[derive(Serialize, SerializedBytes, Deserialize)]
pub struct HashedZomeDef {
    hash: WrappedEntryHash,
    content: ZomeDef,
}
#[derive(Serialize, SerializedBytes, Deserialize)]
pub struct GetZomesOutput(Vec<HashedZomeDef>);
#[hdk_extern]
pub fn get_all_zome_defs(_: ()) -> ExternResult<GetZomesOutput> {
    let path = all_zomes_path();
    let zomes_defs: Vec<(WrappedEntryHash, ZomeDef)> =
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
