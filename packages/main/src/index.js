import "reflect-metadata" // typeORM
import './bootstrap/main.js'
import './controller/ipc/exportKindleContent'
const { app, dialog, ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");


// Get the path to the app data directory
const userDataPath = app.getPath("userData");

// Define the name of the file where the data will be saved
const userDataFile = "userdata.json";

// Load the user's data from file and send it back to the preload script
function loadUserData(event) {
  try {
    const data = fs.readFileSync(path.join(userDataPath, userDataFile));
    const userData = JSON.parse(data);
    event.sender.send("userDataLoaded", userData);
  } catch (err) {
    // If the file doesn't exist, send an empty object back to the preload script
    event.sender.send("userDataLoaded", {});
  }
}

// Save the user's data to file
function saveUserData(userData) {
  fs.writeFileSync(
    path.join(userDataPath, userDataFile),
    JSON.stringify(userData)
  );
}

// Listen for IPC messages from the preload script to save and load user data
ipcMain.on("saveUserData", (event, userData) => {
  saveUserData(userData);
});

ipcMain.on("loadUserData", (event) => {
  loadUserData(event);
});
