import { getThumbnailsByAsin } from "#preload";
import { getBooksByLastDate, getAllBooks } from "../database/bookController";
import { getWordCount } from "../database/wordController";
import { getBookCount } from "../database/bookController";

export async function prepKindleData(byLatest = false) {
    const books = byLatest ? await getBooksByLastDate() : await getAllBooks();
    const thumbnailMap = await getThumbnailsByAsin(books.map(book => book.asin));
    const data = books.map(book => {
        const thumbnail = thumbnailMap[book.asin]
        return { ...book, thumbnail};
    });
    return data;
};



export async function prepKindleMetadata() {
    const bookCount = await getBookCount();
    const wordCount = await getWordCount();
    const metadata = { ...bookCount, ...wordCount }
    return metadata;
};


