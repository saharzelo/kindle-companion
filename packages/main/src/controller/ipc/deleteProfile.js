import { ipcMain } from "electron";
import path from "path";
import { getConfig } from "../../config";
import fsExtra from "fs-extra"

ipcMain.handle("deleteProfile", async (event, profileName) => {
    try {
        const config = getConfig();
        const profilePath = path.join(config.profileDir, profileName);
        fsExtra.emptyDirSync(profilePath); // Deletes all contents of the folder
        fsExtra.removeSync(profilePath); // Deletes the folder itself
        console.log('wtf?')
    } catch (err) {
        console.error(err);
    }
});
