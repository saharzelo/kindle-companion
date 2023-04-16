import { getThumbnailsByAsin } from "#preload";
import { getBooksByLastDate, getAllBooks } from "../database/bookController";
import { getWordsCount } from "../database/wordController";
import { getBookCount } from "../database/bookController";

export async function prepKindleData(byLatest=false, fetchLookups=false) {
    const books = byLatest ? await getBooksByLastDate() : await getAllBooks();
    const {wordCount, bookCount} = await getWordsCount(); await getBookCount();
    console.log(wordCount)

    const thumbnailMap = await getThumbnailsByAsin(books.map(book => book.asin));
    const kindleData = books.map(book => {
        const thumbnail = thumbnailMap[book.asin]
        return {...book, thumbnail};
    })

    return kindleData
};