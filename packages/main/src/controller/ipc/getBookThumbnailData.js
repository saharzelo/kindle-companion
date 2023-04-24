import { ipcMain } from "electron";
import path from "path";
import fs from "fs/promises";
import defaultConfig from "../../config";

ipcMain.handle("getBookThumbnailData", async (event, bookAsinArray) => {
    try {
        const base64Map = {};
        const tmpDir = defaultConfig.tmpDir;
        const thumbnailsDir = path.join(tmpDir, "thumbnails");

        await Promise.all(
            bookAsinArray.map(async (book) => {
                const jpgPath = path.join(thumbnailsDir, `${book}.jpg`);
                try {
                    const data = await fs.readFile(jpgPath);
                    const base64 = data.toString("base64");
                    base64Map[book] = `data:image/jpg;base64,${base64}`;
                } catch (error) {
                    base64Map[book] = null;
                }
            })
        );

        return base64Map;
    } catch (error) {
        console.error(error);
        throw new Error(`Error getting book thumbnail data: ${error.message}`);
    }
});
