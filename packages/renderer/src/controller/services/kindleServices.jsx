import { getThumbnails } from "#preload";
import { getBooksByLastDate, getAllBooks } from "../database/bookController";


export async function fetchKindleBooksData(byDate = false, fetchLooksups = false) {
    const books = byDate ? await getBooksByLastDate() : await getAllBooks();
    const thumbnailMap = await getThumbnails(books.map(result => result.asin));
    const booksData = books.map(book => {
        const thumbnail = thumbnailMap[book.asin]
        return {...book, thumbnail};
    })
    return booksData
};