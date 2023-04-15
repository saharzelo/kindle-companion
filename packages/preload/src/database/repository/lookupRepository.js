import { getConnection } from '../createConnection'



// export function findAllWords() {
//     const con = getConnection();
//     const query = 'SELECT * FROM BOOK_INFO';
//     return new Promise((resolve, reject) => {
//         con.all(query, [], (err, rows) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//         });
//     });
// }


export function findLookupsByAsin(asin) {
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




export function getLookupsByDate(date) {
    const con = getConnection();
    const query = `
    SELECT b.title, w.word, l.usage, strftime('%m/%d/%Y %H:%M:%S', datetime(l.timestamp / 1000, 'unixepoch')) as timestamp_formatted, w.stem
    FROM BOOK_INFO b
    JOIN LOOKUPS l ON b.id = l.book_key
    JOIN WORDS w ON l.word_key = w.id
    WHERE date(datetime(l.timestamp / 1000, 'unixepoch')) = ?
  `;
    return new Promise((resolve, reject) => {
        con.all(query, [date], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
