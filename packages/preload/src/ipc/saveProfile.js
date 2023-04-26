// Save profile function using Electron's ipcRenderer module

import { ipcRenderer } from "electron";

export async function saveProfile(profileName) {
  try {
    const result = await ipcRenderer.invoke("saveProfile", profileName);
    console.log(result)
    return result;
  } catch (error) {
    console.error(error);
  }
}
