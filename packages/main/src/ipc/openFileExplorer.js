// Listen for the "select-file" message from the renderer process
import * as QUERY from '../controller/queryHelper'
import { getAllBooks } from '../controller/database/controller/bookController/getAllBooks';

const { dialog, ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");

ipcMain.handle('openFileExplorer', async (event) => {
  return new Promise((resolve, reject) => {
    const options = { title: 'Select a file', properties: ['openDirectory'] };
    dialog.showOpenDialog(options).then((result) => {
      if (!result.canceled) {
        const folderPath = result.filePaths[0];
        //  extract as db manager
        // const filePath = folderPath + '/system/vocabulary/vocab.db';
        // const db = new sqlite3.Database(filePath);
        // db.all(QUERY.WORDS_BY_TIME, [], (err, rows) => {
        //   if (err) {
        //     console.error(err.message);
        //     reject(err);
        //   } else {
        //     resolve(rows);
        //   }
        //   db.close();
        // });
        //
        getAllBooks(folderPath)
      } else {
        reject(new Error('User canceled file selection.'));
      }
    }).catch((err) => {
      reject(err);
    });
  });
});