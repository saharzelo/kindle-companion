import { runQuery } from "../dbConnection";

async function getAllBooks() {
    const query = "SELECT title, asin FROM BOOK_INFO";
    return await runQuery(query);
}

async function getBookByAsin(asin) {
    const query = `
    SELECT
      b.title as title,
      b.authors as author,
      strftime('%m/%d/%Y', datetime(MIN(w.timestamp) /1000, 'unixepoch')) minTime,
      strftime('%m/%d/%Y', datetime(MAX(w.timestamp) /1000, 'unixepoch')) maxTime,
      IFNULL(count(*), 0) as wordCount
    FROM
      WORDS w
      LEFT JOIN LOOKUPS l ON l.word_key=w.id
      LEFT JOIN BOOK_INFO b ON b.guid=l.book_key
    WHERE
      b.asin = ?
    GROUP BY
      b.title
    ORDER BY
      minTime ASC;
    `;
    return await runQuery(query, [asin], "get");
}

async function getBooksByDate(date) {
    const query = `
    SELECT 
        DISTINCT title, asin
    FROM (
        SELECT l.book_key, b.asin, b.title, date(w.timestamp / 1000, 'unixepoch') AS word_date
        FROM WORDS w
        LEFT JOIN LOOKUPS l ON l.word_key = w.id
        LEFT JOIN BOOK_INFO b ON b.guid = l.book_key
    ) t
    where t.word_date = ?
    `;
    return await runQuery(query, [date]);
}

async function getBookCount() {
    const query = "SELECT COUNT(*) as bookCount FROM BOOK_INFO";
    return await runQuery(query, [], "get");
}

async function getWordCountByAsin() {
    const query = `
    SELECT 
        b.asin, 
        COUNT(DISTINCT lookups.word_key) AS wordCount
    FROM 
        BOOK_INFO b
    JOIN LOOKUPS lookups ON b.id = lookups.book_key
    GROUP BY b.asin;`;
    return await runQuery(query, []);
}

export const bookRepo = {
    getAllBooks,
    getBookByAsin,
    getBooksByDate,
    getBookCount,
    getWordCountByAsin,
};
