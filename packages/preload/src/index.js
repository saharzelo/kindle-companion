/**
 * @module preload
 */


import { ipcRenderer } from 'electron'

export function openFile() {
  ipcRenderer.send('select-file');
}

// Define a function to save the user data to disk
export function saveUserData(userData) {
  ipcRenderer.send("saveUserData", userData);
}

// Define a function to load the user data from disk
export function loadUserData() {
  return new Promise((resolve, reject) => {
    ipcRenderer.once("userDataLoaded", (event, userData) => {
      resolve(userData);
    });

    ipcRenderer.send("loadUserData");
  });
}

export { ipcRenderer } from 'electron'
