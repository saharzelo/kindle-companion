import { getConnection } from "../createConnection";

async function getWordCount() {
    const con = await getConnection();
    const query = "SELECT COUNT(*) as wordCount FROM WORDS";
    return await runQuery(query, [], "get");
}

async function getBookIdsByWord(word) {
    const con = await getConnection();
    const query = `
      SELECT DISTINCT lookups.book_key, lookups.usage 
      FROM words 
      JOIN lookups ON words.id = lookups.word_key 
      WHERE words.word = ?
    `;
    return await runQuery(query, [word]);
}
export const wordRepo = {
    getWordCount,
    getBookIdsByWord,
};
