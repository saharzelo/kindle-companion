import { ipcMain } from "electron";

ipcMain.handle("saveProfile", async (event) => {
    return getConfig();
});
