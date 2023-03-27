const { ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");

ipcMain.handle("getBookThumbnailData", (event, bookIdArray) => {
    return new Promise(async (resolve, reject) => {
      try {
        const base64Array = await Promise.all(bookIdArray.map(async (book) => {
          const userTmp = process.env.TMP_DIR;
          const jpgPath = path.join(userTmp, 'thumbnails', `${book}.jpg`);
          const base64 = fs.readFileSync(jpgPath).toString('base64');
          return { bookId: `${book}.jpg`, base64: `data:image/jpg;base64,${base64}` };
        }));
        resolve(base64Array);
      } catch (error) {
        reject(error);
      }
    });
  });
