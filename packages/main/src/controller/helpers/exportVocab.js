const path = require('path');
const fs = require('fs');


export function exportVocab(kindlePath) {
  return new Promise((resolve, reject) => {
    const db = kindlePath + '/system/vocabulary/vocab.db';
    const tempPath = path.join(process.env.TMP_DIR, path.basename(db));
    try {
      const data = fs.readFileSync(db);
      fs.writeFileSync(tempPath, data);
      resolve();
    } catch (err) {
      console.error(err);
      reject(err.message);
    }
  });
};
