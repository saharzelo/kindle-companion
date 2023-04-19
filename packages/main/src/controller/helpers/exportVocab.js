import path from 'path';
import fs from 'fs';
import defaultConfig from '../../config';


export function exportVocab(kindlePath) {
  return new Promise((resolve, reject) => {
    const db = kindlePath + '/system/vocabulary/vocab.db';
    const tempPath = path.join(defaultConfig.tmpDir, path.basename(db));
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
