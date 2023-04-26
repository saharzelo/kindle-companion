import { ipcMain } from "electron";
import fs from "fs/promises";
import { getConfig } from "../../config";

ipcMain.handle("getProfiles", async (event) => {
    try {
        const config = getConfig();
        const profileDir = config.profileDir;
        const profileDirs = await fs.readdir(profileDir, {
            withFileTypes: true,
        });
        const dirNames = profileDirs
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);
        return dirNames;
    } catch (err) {
        console.error(err);
        return [];
    }
});
