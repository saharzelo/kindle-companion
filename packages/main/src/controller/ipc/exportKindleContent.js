import { exportVocab } from "../helpers/exportVocab";
import { exportThumbnails } from "../helpers/exportThumbnails";
import { dialog, ipcMain } from "electron";

ipcMain.handle("kindle/export-content", async () => {
    try {
        const options = {
            title: "Select a folder",
            properties: ["openDirectory"],
        };
        const result = await dialog.showOpenDialog(options);

        if (!result.canceled) {
            const folderPath = result.filePaths[0];
            await exportVocab(folderPath);
            exportThumbnails(folderPath);

            return "success";
        } else {
            console.error("User canceled folder selection.");
        }
    } catch (error) {
        console.error(`Export failed: ${error.message}`);
    }
});
