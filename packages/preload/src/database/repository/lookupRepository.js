import { runQuery } from "../createConnection";

async function getLookupsByAsin(asin) {
    const query = `
        SELECT w.word, l.usage, strftime('%m/%d/%Y %H:%M:%S', datetime(l.timestamp / 1000, 'unixepoch')) as timestamp_formatted, w.stem
        FROM BOOK_INFO b
        JOIN LOOKUPS l ON b.id = l.book_key
        JOIN WORDS w ON l.word_key = w.id
        WHERE b.asin = ?`;
    return await runQuery(query, [asin]);
}

async function getLookupsByDate(date) {
    const query = `
        SELECT b.title, w.word, l.usage, strftime('%m/%d/%Y %H:%M:%S', datetime(l.timestamp / 1000, 'unixepoch')) as timestamp_formatted, w.stem, b.asin
        FROM BOOK_INFO b
        JOIN LOOKUPS l ON b.id = l.book_key
        JOIN WORDS w ON l.word_key = w.id
        WHERE date(datetime(l.timestamp / 1000, 'unixepoch')) = ?`;
    return await runQuery(query, [date]);
}

async function GetLatestLookupDate() {
    const query = `
        SELECT 
            date(MAX(timestamp) / 1000, 'unixepoch') AS latest_date 
        FROM 
            WORDS`;
    return await runQuery(query, [], "get");
}

export const lookupRepo = {
    getLookupsByAsin,
    getLookupsByDate,
    GetLatestLookupDate,
};
