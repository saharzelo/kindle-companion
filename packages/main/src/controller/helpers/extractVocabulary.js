import path from "path";
import fs from "fs/promises";
import { getConfig } from "../../config";

export async function extractVocabulary(kindlePath) {
    const config = getConfig();
    const vocabDBFile = path.join(kindlePath, config.vocabFilePath);
    const tempPath = path.join(config.tmpDir, path.basename(vocabDBFile));
    try {
        const data = await fs.readFile(vocabDBFile);
        await fs.writeFile(tempPath, data);
        return true;
    } catch (err) {
        console.error(`Export failed: ${err.message}`);
        return false;
    }
}
