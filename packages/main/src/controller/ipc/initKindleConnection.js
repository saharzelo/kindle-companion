// Listen for the "select-file" message from the renderer process
import * as QUERY from '../queryHelper'
import { getAllBooks } from '../database/controller/bookController/getAllBooks';
import { exportKindle } from '../helpers/exportKindle';
const { dialog, ipcMain } = require('electron');

ipcMain.handle('initKindleConnection', async (event) => {
  return new Promise((resolve, reject) => {
    const options = { title: 'Select a file', properties: ['openDirectory'] };
    dialog.showOpenDialog(options).then((result) => {
      if (!result.canceled) {
        const folderPath = result.filePaths[0];

        
        exportKindle(folderPath); // return promise

      
        //  extract as db manager
        const sqlite3 = require('sqlite3')
        const db = new sqlite3.Database('/tmp/vocab.db');
        db.all(QUERY.BOOK_NAMES, [], (err, rows) => {
          if (err) {
            console.error(err.message);
            reject(err);
          } else {
            console.log(rows)
            resolve(rows);
          }
          db.close();
        });
        resolve('success')
        getAllBooks(folderPath)
      } else {
        reject(new Error('User canceled file selection.'));
      }
    }).catch((err) => {
      reject(err);
    });
  });
});