import { getBookByAsin } from "../database/bookController"
import { getLookupsByAsin } from "../database/lookupController";


export async function prepBookData(bookAsin) {
    const bookData = await getBookByAsin(bookAsin)
    const lookupsData = await getLookupsByAsin(bookAsin)
    return {book: bookData, lookups: lookupsData}
};