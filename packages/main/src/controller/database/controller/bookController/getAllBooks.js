import { dbHandler } from "../../repository/dbHandler";


export async function getAllBooks(folderPath) {
    const filePath = folderPath + '/system/vocabulary/vocab.db';
    let db = await dbHandler(filePath)
}



        // //  extract as db manager
        // const sqlite3 = require('sqlite3')
        // const db = new sqlite3.Database('/tmp/vocab.db');
        // db.all(QUERY.BOOK_NAMES, [], (err, rows) => {
        //   if (err) {
        //     console.error(err.message);
        //     reject(err);
        //   } else {
        //     console.log(rows)
        //     resolve(rows);
        //   }
        //   db.close();
        // });