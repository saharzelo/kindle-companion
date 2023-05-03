import { ipcMain } from "electron";
import path from "path";
import { getConfig } from "../../config";
import fsExtra from "fs-extra"

ipcMain.handle("deleteProfile", async (event, profileName) => {
    try {
        const config = getConfig();
        const profilePath = path.join(config.profileDir, profileName);
        fsExtra.emptyDirSync(profilePath);
        fsExtra.removeSync(profilePath);
    } catch (err) {
        console.error(err);
    }
});
