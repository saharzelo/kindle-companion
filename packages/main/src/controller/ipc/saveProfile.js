import { ipcMain } from "electron";
import { getConfig } from "../../config";
import path from "path";
import fs from "fs";
import fsExtra from 'fs-extra';


ipcMain.handle("saveProfile", async (event, profileName) => {
    try {
        // create new folder
        const config = getConfig();
        const parsedName = profileName.trim().toLowerCase();
        const profilePath = path.join(config.profileDir, parsedName);
        console.log(profilePath)
        if (fs.existsSync(profilePath)) {
            return false;
        }
        fs.mkdirSync(profilePath);


        // copy files to new folder
        await fsExtra.copy(config.currDir, profilePath)

        // set new config dir



    } catch (error) {
        console.error(error);
    }
});
