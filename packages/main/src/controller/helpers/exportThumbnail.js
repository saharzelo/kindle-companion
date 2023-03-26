const os = require('os');
const path = require('path');
const fs = require('fs');


export function exportThumbnail(kindlePath) {
  return new Promise((resolve, reject) => {
    const tmpDir = process.env.TMP_DIR
    console.log('wtf??',typeof(tmpDir))
    const thumbnailsPath = kindlePath + '/system/thumbnails/';
    const destPath = path.join(tmpDir, 'thumbnails')

    try {
      fs.readdir(thumbnailsPath, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }

        files.forEach(file => {
          // check if the file name matches the pattern
          if (/^thumbnail_[^_]*$/.test(file)) {
            const srcPath = path.join(thumbnailsPath, file);
            const destFileName = file.replace(/^thumbnail_|_EBOK$/g, '');
            const destFilePath = path.join(destPath, destFileName);

            fs.copyFile(srcPath, destFilePath, (err) => {
              if (err) {
                console.error(`Error copying file ${file}: ${err}`);
              } else {
                console.log(`Copied file ${file} to ${destFileName}`);
              }
            });
          }
        });
      });


      // thumbnails.forEach(thumbnail => {
      //   const srcPath = path.join(thumbnailsPath, thumbnail);
      //   console.log(src)

      //   // fs.copyFile(srcPath, destFilePath, (err) => {
      //   //   if (err) {
      //   //     console.error(`Error copying file ${file}: ${err}`);
      //   //   } else {
      //   //     console.log(`Copied file ${file}`);
      //   //   }
      //   // });
      // });
      // fs.writeFileSync(tempPath, data);
      // resolve();
    } catch (err) {
      console.error(err);
      reject(err.message);
    }
  });
}