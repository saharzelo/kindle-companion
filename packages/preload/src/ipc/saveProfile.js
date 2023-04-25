import { ipcRenderer } from "electron";

export function saveProfile(profileName, isTemp) {
  return ipcRenderer.invoke("saveProfile", profileName, isTemp);
}
