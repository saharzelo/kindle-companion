const os = require('os');
const path = require('path');
const fs = require('fs');


export function exportVocab(kindlePath) {
    return new Promise((resolve, reject) => {
        const db = kindlePath + '/system/vocabulary/vocab.db';
        const tempPath = path.join(os.tmpdir(), path.basename(db));
        try {
            const data = fs.readFileSync(db)
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                reject();
            }
        }
        fs.writeFile(tempPath, data)
    });
}
