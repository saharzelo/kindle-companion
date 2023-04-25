import path from "path";
import fs from "fs/promises";
import { getConfig } from "../../config";

export async function extractThumbnails(kindlePath) {
    try {
        const config = getConfig();
        const tmpDir = config.tmpDir;
        const thumbnailsPath = path.join(kindlePath, "system/thumbnails");
        const destPath = path.join(tmpDir, "thumbnails");

        const files = await fs.readdir(thumbnailsPath);
        const promises = files.map(async (file) => {
            if (/^thumbnail_[^_]+_EBOK_portrait\.jpg$/.test(file)) {
                const srcPath = path.join(thumbnailsPath, file);
                const bookId = file.match(
                    /^thumbnail_(.+)_EBOK_portrait\.jpg$/
                )[1];
                const destFileName = `${bookId}.jpg`;
                const destFilePath = path.join(destPath, destFileName);
                await fs.copyFile(srcPath, destFilePath);
            }
        });
        await Promise.all(promises);

        return "success";
    } catch (error) {
        console.error(error);
    }
}
