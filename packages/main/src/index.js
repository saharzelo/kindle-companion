import './bootstrap/main'

const { app, dialog, ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");



// Listen for the "select-file" message from the renderer process
ipcMain.on('selectFiles', async (event) => {
	const options = { title: 'Select a file', properties: ['openDirectory'] };
	dialog.showOpenDialog(options).then((result) => {
		if (!result.canceled) {
		  const folderPath = result.filePaths[0];
		  const filePath = folderPath + '/system/vocabulary/vocab.db';
		  event.sender.send('file-contents', filePath);
		}
	  }).catch((err) => {
		console.log(err);
	  });
});



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
