import { getConnection } from '../createConnection'


export function findLatestWordDate() {
    const con = getConnection();
    const query = `
        SELECT 
            date(MAX(timestamp) / 1000, 'unixepoch') AS latest_date 
        FROM 
            WORDS;`;
    return new Promise((resolve, reject) => {
        con.get(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}