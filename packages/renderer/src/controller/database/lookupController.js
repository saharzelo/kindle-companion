import { lookupRepo } from '#preload';


export async function getRecentLookups() {
    const date = await lookupRepo.GetLatestLookupDate()
    const lookups = await lookupRepo.getLookupsByDate(date.latest_date)
    return lookups
}


export async function getAllLookups() {
    try {
        const lookups = 1
        return lookups
    } catch (error) {
        console.error(error)
    }
}


export async function getLookupsByAsin(asin) {
    try {
        const lookups = lookupRepo.getLookupsByAsin(asin)
        return lookups
    } catch (error) {
        console.error(error)
    }
}

export async function getLookupCount() {
    try {
        const lookupCount = await lookupRepo.getLookupCount();
        return lookupCount;
    } catch (error) {
        console.error(error);
    }
}