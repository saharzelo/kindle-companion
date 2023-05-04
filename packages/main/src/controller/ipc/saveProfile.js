import { ipcMain } from "electron";
import { getConfig } from "../../config";
import path from "path";
import fs from "fs";
import fsExtra from "fs-extra";

ipcMain.handle("saveProfile", async (event, profileName) => {
    try {
        // create new folder
        const config = getConfig();
        const parsedName = profileName.trim();
        const profilePath = path.join(config.profileDir, parsedName);
        if (fs.existsSync(profilePath)) {
            return false;
        }
        fs.mkdirSync(profilePath);

        await fsExtra.copy(config.currDir, profilePath);
    } catch (error) {
        console.error(error);
    }
});
