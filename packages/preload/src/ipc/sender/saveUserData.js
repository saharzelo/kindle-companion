import { ipcRenderer } from 'electron';

// save the user data to disk

export function saveUserData(userData) {
  ipcRenderer.send("saveUserData", userData);
}
