import { getThumbnailsByAsin } from "#preload";
import { getLookupCount } from "../database/lookupController";
import { getBookCount } from "../database/bookController";
import {
    getBooksByLastDate,
    getAllBooks,
    getWordCountByAsin,
} from "../database/bookController";


export async function prepKindleData(byLatest = false) {
    const books = byLatest ? await getBooksByLastDate() : await getAllBooks();
    const booksAsin = books.map((book) => book.asin);
    const wordCountMap = await getWordCountByAsin()
    const thumbnailMap = await getThumbnailsByAsin(booksAsin);
    const data = books.map((book) => {
        return { ...book, thumbnail: thumbnailMap[book.asin], meta: {wordCount: wordCountMap[book.asin]} };
    });
    return data;
}

export async function prepKindleMetadata() {
    const bookCount = await getBookCount();
    const lookupCount = await getLookupCount();
    const metadata = { ...bookCount, ...lookupCount };
    return metadata;
}
