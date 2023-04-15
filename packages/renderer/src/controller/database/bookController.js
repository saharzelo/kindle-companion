import { bookRepo, lookupRepo } from '#preload';


export async function getBooksByLastDate() {
    const date = await lookupRepo.GetLatestLookupDate();
    const books = await bookRepo.getBooksByDate(date.latest_date)
    return books
}


export async function getAllBooks() {
    try {
        const books = await bookRepo.getAllBooks()
        return books
    } catch (error) {
        console.error(error)
    }
}