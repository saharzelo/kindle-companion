// Listen for the "select-file" message from the renderer process

const { dialog, ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");


ipcMain.on('selectFiles', async (event) => {
	const options = { title: 'Select a file', properties: ['openDirectory'] };
	dialog.showOpenDialog(options).then((result) => {
		if (!result.canceled) {
		  const folderPath = result.filePaths[0];
		  const filePath = folderPath + '/system/vocabulary/vocab.db';
		  event.sender.send('file-contents', filePath);
      console.log('helo')
		}
	  }).catch((err) => {
		console.log(err);
	  });
});
