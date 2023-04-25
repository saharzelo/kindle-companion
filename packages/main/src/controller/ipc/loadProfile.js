import { ipcMain } from "electron";
import path from "path";
import { getConfig, setConfig } from "../../config";

ipcMain.handle("loadProfile", async (event, profileName) => {
    try {
        const config = getConfig();
        const profilePath = path.join(config.profileDir, profileName)
        setConfig({currDir: profilePath})
        console.log('wtf???',getConfig().currDir)
 
    } catch (err) {
        console.error(err);
    }
});
