import { ipcRenderer } from 'electron';

// load the user data from disk

export function loadUserData() {
  return new Promise((resolve) => {
    ipcRenderer.once("userDataLoaded", (event, userData) => {
      resolve(userData);
    });
    ipcRenderer.send("loadUserData");
  });
}
