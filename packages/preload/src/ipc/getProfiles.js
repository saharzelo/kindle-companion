import { ipcRenderer } from "electron";

export async function getProfiles() {
    try {
        const profiles = await ipcRenderer.invoke("getProfiles");
        return profiles
    } catch (err) {
        console.error("error getting profile: \n", err);
    }
}
