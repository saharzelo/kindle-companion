import { ipcRenderer } from "electron";

export async function saveProfile(profileName) {
    try {
        const result = await ipcRenderer.invoke("saveProfile", profileName);
        return result;
    } catch (error) {
        console.error("Error Saving Profile: \n", error);
    }
}
