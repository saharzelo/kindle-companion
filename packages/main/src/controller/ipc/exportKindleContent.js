// Listen for the "select-file" message from the renderer process
import { exportVocab } from '../helpers/exportVocab';
const { dialog, ipcMain } = require('electron');
import { exportThumbnail } from '../helpers/exportThumbnail';
ipcMain.handle('exportKindleContent', async () => {
  return new Promise((resolve, reject) => {
    const options = { title: 'Select a file', properties: ['openDirectory'] };
    dialog.showOpenDialog(options).then((result) => {
      if (!result.canceled) {
        const folderPath = result.filePaths[0];



        // create destination folder in tmp that will hold everything by profile 
        // and pass it to exportVocab(), ExportThumbnail()



        // export vocab
        exportVocab(folderPath).then(() => {
          resolve('success')
        })
          .catch(() => {
            reject(new Error('File not found'));
          });

        // export thumbnails
        exportThumbnail(folderPath)

      } else {
        reject(new Error('User canceled file selection.'));
      }
    });
  });
});