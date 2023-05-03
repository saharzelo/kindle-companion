import { bookRepo, lookupRepo } from "#preload";

export async function getBooksByLastDate() {
    try {
        const date = await lookupRepo.GetLatestLookupDate();
        const books = await bookRepo.getBooksByDate(date.latest_date);
        return books;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllBooks() {
    try {
        const books = await bookRepo.getAllBooks();
        return books;
    } catch (error) {
        console.error(error);
    }
}

export async function getBookByAsin(asin) {
    try {
        const books = await bookRepo.getBookByAsin(asin);
        return books;
    } catch (error) {
        console.error(error);
    }
}

export async function getBookCount() {
    try {
        const bookCount = await bookRepo.getBookCount();
        return bookCount;
    } catch (error) {
        console.error(error);
    }
}

export async function getWordCountByAsin() {
    try {
        const wordCount = await bookRepo.getWordCountByAsin();
        let wordCountAsinMap = {};
        wordCount.map((book) => {
            wordCountAsinMap[book.asin] = book.wordCount;
        });
        return wordCountAsinMap;
    } catch (error) {
        console.error(error);
    }
}
