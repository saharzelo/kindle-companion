import { getConnection } from '../createConnection'



export function findAll() {
    const con = getConnection();
    const query = 'SELECT * FROM BOOK_INFO';
    return new Promise((resolve, reject) => {
        con.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}


export function findByAsin(asin) {
    const con = getConnection();
    const query = `
        SELECT w.word, l.usage, strftime('%m/%d/%Y %H:%M:%S', datetime(l.timestamp / 1000, 'unixepoch')) as timestamp_formatted, w.stem
        FROM BOOK_INFO b
        JOIN LOOKUPS l ON b.id = l.book_key
        JOIN WORDS w ON l.word_key = w.id
        WHERE b.asin = ?
    `;

    return new Promise((resolve, reject) => {
        con.all(query, [asin], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
