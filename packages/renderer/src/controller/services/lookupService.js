import { getAllLookups, getRecentLookups } from "../database/lookupController";

export async function prepLookupData(byDate=false) {
    const lookups = byDate ? await getRecentLookups() : await getAllLookups();
    return lookups
}
