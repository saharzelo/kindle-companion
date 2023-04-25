import { extractVocabulary } from "../extractors/extractVocabulary";
import { dialog, ipcMain } from "electron";
import { extractThumbnails } from "../extractors/extractThumbnails";

ipcMain.handle("kindle/export-content", async () => {
    try {
        const options = {
            title: "Select a folder",
            properties: ["openDirectory"],
        };
        const result = await dialog.showOpenDialog(options);

        if (result) {
            const folderPath = result.filePaths[0];
            await extractVocabulary(folderPath);
            await extractThumbnails(folderPath);

            return "success";
        } else {
            console.error("User canceled folder selection.");
        }
    } catch (error) {
        console.error(`Export failed: ${error.message}`);
    }
});
