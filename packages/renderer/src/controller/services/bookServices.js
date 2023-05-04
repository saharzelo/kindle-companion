import { getBookByAsin } from "../database/bookController";
import { getLookupsByAsin } from "../database/lookupController";
import { getThumbnailsByAsin } from "#preload";
import {
    getBooksByLastDate,
    getAllBooks,
    getWordCountByAsin,
} from "../database/bookController";

export async function prepBookData(bookAsin) {
    const bookData = await getBookByAsin(bookAsin);
    const lookupsData = await getLookupsByAsin(bookAsin);
    return { meta: bookData, lookups: lookupsData };
}

export async function prepBooksData(byLatest = false) {
    const books = byLatest ? await getBooksByLastDate() : await getAllBooks();
    const booksAsin = books.map((book) => book.asin);
    const wordCountMap = await getWordCountByAsin()
    const thumbnailMap = await getThumbnailsByAsin(booksAsin);
    const data = books.map((book) => {
        return { ...book, thumbnail: thumbnailMap[book.asin], meta: {wordCount: wordCountMap[book.asin]} };
    });
    return data;
}