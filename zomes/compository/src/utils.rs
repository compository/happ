use hc_utils::WrappedEntryHash;
use hdk3::prelude::*;

pub fn try_get_and_convert<T: TryFrom<Entry>>(entry_hash: EntryHash) -> ExternResult<T> {
    match get(entry_hash.clone(), GetOptions::default())? {
        Some(element) => try_from_element(element),
        None => Err(crate::err("Entry not found")),
    }
}

pub fn try_from_element<T: TryFrom<Entry>>(element: Element) -> ExternResult<T> {
    match element.entry() {
        element::ElementEntry::Present(entry) => T::try_from(entry.clone()).or(Err(crate::err(""))),
        _ => Err(crate::err("Could not convert element")),
    }
}

pub fn get_links_and_load_type<R: TryFrom<Entry>>(
    base: EntryHash,
    tag: Option<LinkTag>,
) -> ExternResult<Vec<(WrappedEntryHash, R)>> {
    let link_info = get_links(base.into(), tag)?.into_inner();

    let results = link_info
        .iter()
        .map(|link| {
            let entry = try_get_and_convert::<R>(link.target.clone())?;
            Ok((WrappedEntryHash(link.target.clone()), entry))
        })
        .collect::<ExternResult<Vec<(WrappedEntryHash, R)>>>()?;

    Ok(results)
}
