import { ipcRenderer } from 'electron';

const sqlite3 = require('sqlite3').verbose();

ipcRenderer.on('fileContent', (event, data) => {
  const db = new sqlite3.Database(data);
  db.all('SELECT title FROM BOOK_INFO', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log(rows)
})

})
