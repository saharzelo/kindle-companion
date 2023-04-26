import { ipcMain } from "electron";
import { getConfig } from "../../config";
import path from "path";
import fs from "fs/promises";

ipcMain.handle("saveProfile", async (event, profileName) => {
    try {
        const config = getConfig();
        const parsedName = profileName.trim().toLowerCase();
        const profilePath = path.join(config.profileDir, parsedName);
        if (await fs.existsSync(profilePath)) {
            return false;
        }
        await fs.mkdirSync(profilePath);
    } catch (error) {
        console.error(error);
    }
});
