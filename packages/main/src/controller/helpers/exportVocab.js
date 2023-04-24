import path from "path";
import fs from "fs/promises";
import defaultConfig from "../../config";

export async function exportVocab(kindlePath) {
    const db = path.join(kindlePath, "system", "vocabulary", "vocab.db");
    const tempPath = path.join(defaultConfig.tmpDir, path.basename(db));
    try {
        const data = await fs.readFile(db);
        await fs.writeFile(tempPath, data);
        return true;
    } catch (err) {
        console.error(`Export failed: ${err.message}`);
        return false;
    }
}
