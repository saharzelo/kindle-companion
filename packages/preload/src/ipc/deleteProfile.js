import { ipcRenderer } from "electron";

export const deleteProfile = async (profileName) => {
    try {
        const result = await ipcRenderer.invoke("deleteProfile", profileName);
        return result;
    } catch (error) {
        console.error("Error Deleting Profile: \n ", error);
    }
};
