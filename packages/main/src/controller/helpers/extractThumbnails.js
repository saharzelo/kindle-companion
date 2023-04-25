import path from "path";
import fs from "fs/promises";
import { getConfig } from "../../config";

export async function extractThumbnails(kindlePath) {
    try {
        const config = getConfig();
        const thumbnailsDir = path.join(kindlePath, "system", "thumbnails");
        const destDir = path.join(config.tmpDir, "thumbnails");

        const thumbnailFiles = await fs.readdir(thumbnailsDir);
        const thumbnailCopyPromises = thumbnailFiles.map(async (thumbnailFile) => {
            if (/^thumbnail_[^_]+_EBOK_portrait\.jpg$/.test(thumbnailFile)) {
                const srcPath = path.join(thumbnailsDir, thumbnailFile);
                const bookAsin = thumbnailFile.match(/^thumbnail_(.+)_EBOK_portrait\.jpg$/)[1];
                const destFileName = `${bookAsin}.jpg`;
                const destPath = path.join(destDir, destFileName);
                await fs.copyFile(srcPath, destPath);
            }
        });
        await Promise.all(thumbnailCopyPromises);

        return "success";
    } catch (error) {
        console.error(error);
    }
}
