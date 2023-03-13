const os = require('os');
const path = require('path');
const fs = require('fs');


export function exportKindle(kindlePath) {
    // Copy db file
    const db = kindlePath + '/system/vocabulary/vocab.db';
    const tempPath = path.join(os.tmpdir(), path.basename(db));
    const data = fs.readFileSync(db);
    fs.writeFileSync(tempPath, data);
}
