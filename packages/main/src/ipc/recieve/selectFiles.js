// Listen for the "select-file" message from the renderer process
import { sendFiles } from '../send/sendFiles';
const { dialog, ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");
const sqlite3 = require('sqlite3').verbose();

ipcMain.handle('selectFiles', async (event) => {
  return new Promise((resolve, reject) => {
    const options = { title: 'Select a file', properties: ['openDirectory'] };
    dialog.showOpenDialog(options).then((result) => {
      if (!result.canceled) {
        const folderPath = result.filePaths[0];
        const filePath = folderPath + '/system/vocabulary/vocab.db';

        const db = new sqlite3.Database(filePath);
        let check = db.all('SELECT title FROM BOOK_INFO', [], (err, rows) => {
          if (err) {
            console.error(err.message);
            reject(err);
          } else {
            resolve(rows);
          }
          db.close();
        });
      } else {
        reject(new Error('User canceled file selection.'));
      }
    }).catch((err) => {
      reject(err);
    });
  });
});