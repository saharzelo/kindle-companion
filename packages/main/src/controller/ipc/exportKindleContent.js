// Listen for the "select-file" message from the renderer process
import { exportVocab } from '../helpers/exportVocab';
const { dialog, ipcMain } = require('electron');

ipcMain.handle('exportKindleContent', async () => {
  return new Promise((resolve, reject) => {
    const options = { title: 'Select a file', properties: ['openDirectory'] };
    dialog.showOpenDialog(options).then((result) => {
      if (!result.canceled) {
        const folderPath = result.filePaths[0];
        exportVocab(folderPath).then(() => {
          resolve('success')
        })
        .catch(() => {
            reject(new Error('no files!'));
          });
      } else {
        reject(new Error('User canceled file selection.'));
      }
    });
  });
});