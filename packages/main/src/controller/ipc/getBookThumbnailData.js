const { ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");

ipcMain.handle("getBookThumbnailData", (event, bookAsinArray) => {
  return new Promise(async (resolve, reject) => {
    try {
      const base64Map = {};
      await Promise.all(bookAsinArray.map(async (book) => {
        const userTmp = process.env.TMP_DIR;
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
