import { ipcMain } from "electron";
import { getConfig } from "../../config";

ipcMain.handle("getConfig", async (event) => {
    return getConfig();
});
