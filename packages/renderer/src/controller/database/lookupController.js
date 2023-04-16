import { lookupRepo } from '#preload';


export async function getRecentLookups() {
    const date = await lookupRepo.GetLatestLookupDate()
    const books = await lookupRepo.getLookupsByDate(date.latest_date)
    return books
}


export async function getAllLookups() {
    try {
        const books = 1
        return books
    } catch (error) {
        console.error(error)
    }
}


export async function getLookupsByAsin(asin) {
    try {
        const books = lookupRepo.getLookupsByAsin(asin)
        return books
    } catch (error) {
        console.error(error)
    }
}