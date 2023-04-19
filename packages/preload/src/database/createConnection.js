import sqlite3 from 'sqlite3';
import { getConfig } from '../ipc/getConfig';

let connection;

function createConnection(dbFilePath) {
  dbFilePath = dbFilePath + '/vocab.db'
  console.log(dbFilePath)

  connection = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
      console.error(err.message);
    } else {
    }
  });
}

export async function getConnection(dbFilePath) {
  const config = await getConfig()
  if (!dbFilePath) {
    dbFilePath = config.tmpDir
  };
  if (!connection || connection.filename !== dbFilePath) {
    createConnection(dbFilePath);
  };
  connection.on('trace', (query) => {
    console.log(`Executing query: ${query}`);
  });
  return connection;
}

