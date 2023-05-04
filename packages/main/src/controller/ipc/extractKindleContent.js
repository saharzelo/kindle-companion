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
        
        const kindlePath = result.filePaths[0];
        await extractVocabulary(kindlePath);
        await extractThumbnails(kindlePath);

        return "success";
    } catch (error) {
        console.error(`Export failed: ${error.message}`);
    }
});
