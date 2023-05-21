import { getAllLookups, getRecentLookups } from "../database/lookupController";

export async function prepLookupsData(byDate=false) {
    const lookups = byDate ? await getRecentLookups() : await getAllLookups();
    console.log(lookups)
    return lookups
}


export async function prepLookupData(word) {
    // fetch: 
    // :last book
    // :last date
    // :how many times
}
