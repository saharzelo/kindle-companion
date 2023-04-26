import { ipcRenderer } from "electron";

export async function loadProfile(profileName) {
    try {
        await ipcRenderer.invoke("loadProfile", profileName);
        return true
    } catch (err) {
        console.error(err);
    }
}
