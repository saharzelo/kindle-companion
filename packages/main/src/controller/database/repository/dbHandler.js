const sqlite3 = require('sqlite3').verbose();




export function dbHandler(dbPath) {
    const dbConnection = new sqlite3.Database(dbPath)
}
