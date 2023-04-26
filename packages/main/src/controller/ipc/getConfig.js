import { ipcMain } from "electron";
import { getConfig } from "../../config";

ipcMain.handle("getConfig", async (event) => {
    try {
        return getConfig();
    } catch (error) {
        console.error(error);
    }
});
