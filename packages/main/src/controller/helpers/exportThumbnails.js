import path from 'path';
import fs from 'fs';
import defaultConfig from '../../config';

export function exportThumbnails(kindlePath) {
  return new Promise((resolve, reject) => {
    const tmpDir = defaultConfig.tmpDir;
    const thumbnailsPath = kindlePath + '/system/thumbnails/';
    const destPath = path.join(tmpDir, 'thumbnails');

    try {
      fs.readdir(thumbnailsPath, (err, files) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        files.forEach(file => {
          if (/^thumbnail_[^_]+_EBOK_portrait\.jpg$/.test(file)) { // check if the file name matches the pattern
            const srcPath = path.join(thumbnailsPath, file);
            const bookId = file.match(/^thumbnail_(.+)_EBOK_portrait\.jpg$/)[1];
            const destFileName = `${bookId}.jpg`;
            const destFilePath = path.join(destPath, destFileName);
            fs.copyFile(srcPath, destFilePath, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve('success');
              }
            });
          }
        });

      });
    } catch (err) {
      console.error(err);
      reject(err.message);
    };
  });
};