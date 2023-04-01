const { ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");

ipcMain.handle("getBookThumbnailData", (event, bookIdArray) => {
  return new Promise(async (resolve, reject) => {
    try {
      const base64Object = {};
      await Promise.all(bookIdArray.map(async (book) => {
        const userTmp = process.env.TMP_DIR;
        const jpgPath = path.join(userTmp, 'thumbnails', `${book}.jpg`);
        if (fs.existsSync(jpgPath)) {
          const base64 = fs.readFileSync(jpgPath).toString('base64');
          base64Object[book] = `data:image/jpg;base64,${base64}`;
        } else {
          base64Object[book] = null;
        }
      }));
      resolve(base64Object);
    } catch (error) {
      reject(error);
    }
  });
});
