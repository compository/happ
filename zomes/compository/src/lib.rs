use hdk3::prelude::*;

mod dna_template;
mod utils;
mod zome_def;

entry_defs![
    zome_def::ZomeDef::entry_def(),
    dna_template::DnaTemplate::entry_def(),
    Path::entry_def()
];

pub fn err(reason: &str) -> HdkError {
    HdkError::Wasm(WasmError::CallError(reason.into()))
}

/*

Process: receive a new unknown reference to a foreign dna

1. Receive <HASH_OF_DNA>://<HASH_OF_ENTRY>
2. Fetch instantiated dna with hash_of_dna
3. Fetch all zomes from template dna and install dna // TODO: what about other companion dnas??
4. Fetch entry with header from newly instantiated dna, get the zome index and entry index
5. Fetch correct bundle from zome entry, and get the string id of the entry type
6. Invoke the appropriate custom element with the hash/element

Configurable pieces for the future
- Link form
- How to get the element from the entry hash
- Dna wide UIs for more specificity
- Multiple and configurable zomepositories
- Authors/reviewers

Tools to make
- UI service to do all client side processing
- CLI tool to upload both DNA and UI to DHT

*/

/* In another repository

Blocky
- Separate dna to register cells with common typed zomes (by hash?)
- TODO: finalize process

*/
