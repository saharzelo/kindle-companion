import {
    getAllBooks,
    getBooksByDate,
    GetLatestLookupDate
} from '#preload'




export async function getBooksByDate() {
    const date = await GetLatestLookupDate();
    const books = await getBooksByDate(date.latest_date)
    return books
}


export async function getAllBooks() {
    try {
        const books = await getAllBooks()
        return books
    } catch (error) {
        console.error(error)
    }
}