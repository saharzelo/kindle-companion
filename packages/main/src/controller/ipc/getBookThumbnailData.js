const { ipcMain } = require('electron');
import path from 'path';
import fs from 'fs';
import defaultConfig from '../../config';
ipcMain.handle("getBookThumbnailData", (event, bookAsinArray) => {
  return new Promise(async (resolve, reject) => {
    try {
      const base64Map = {};
      await Promise.all(bookAsinArray.map(async (book) => {
        const userTmp = defaultConfig.tmpDir;
        const jpgPath = path.join(userTmp, 'thumbnails', `${book}.jpg`);
        if (fs.existsSync(jpgPath)) {
          const base64 = fs.readFileSync(jpgPath).toString('base64');
          base64Map[book] = `data:image/jpg;base64,${base64}`;
        } else {
          base64Map[book] = null;
        }
      }));
      resolve(base64Map);
    } catch (error) {
      reject(error);
    }
  });
});
