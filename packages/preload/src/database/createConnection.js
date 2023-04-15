import sqlite3 from 'sqlite3';

let connection;

function createConnection(dbFilePath) {
  dbFilePath = dbFilePath + '/vocab.db'
  connection = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
      console.error(err.message);
    } else {
    }
  });
}

export function getConnection(dbFilePath = process.env.TMP_DIR) {
  if (!connection || connection.filename !== dbFilePath) {
    createConnection(dbFilePath);
  }
  connection.on('trace', (query) => {
    console.log(`Executing query: ${query}`);
  });
  return connection;
}

