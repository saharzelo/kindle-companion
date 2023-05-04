import { runQuery } from "../dbConnection";

async function getWordUsageByWord(word) {
    const query = `
        SELECT 
        b.title, l.usage, strftime('%m/%d/%Y %H:%M:%S', datetime(l.timestamp / 1000, 'unixepoch'))
        FROM WORDS w
        JOIN LOOKUPS l ON w.id = l.word_key
        JOIN BOOK_INFO b ON l.book_key = b.id
        WHERE w.word = ?
    `;
    return await runQuery(query, [word]);
}
export const wordRepo = {
    getWordUsageByWord,
};
