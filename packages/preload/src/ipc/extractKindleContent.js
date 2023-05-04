import { ipcRenderer } from "electron";

export async function extractKindleContent() {
    try {
        const result = await ipcRenderer.invoke("kindle/export-content");
        if (result === "success") {
            return result;
        } else {
            console.error("IPCMain failed to call selectFiles");
        }
    } catch (error) {
        console.error(error);
    }
}
