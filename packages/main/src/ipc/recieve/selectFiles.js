// Listen for the "select-file" message from the renderer process
import { sendFiles } from '../send/sendFiles';
const { dialog, ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");


ipcMain.on('selectFiles', async (event) => {
  sendFiles(event)
});
