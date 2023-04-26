import { ipcMain } from "electron";
import path from "path";
import { getConfig, setConfig } from "../../config";

ipcMain.handle("loadProfile", async (event, profileName) => {
    try {
        const config = getConfig();
        if (profileName === "temp") {
            setConfig({currDir: config.tmpDir}) 
            return;
        }
        const profilePath = path.join(config.profileDir, profileName)
        setConfig({currDir: profilePath}) 
    } catch (err) {
        console.error(err);
    }
});
