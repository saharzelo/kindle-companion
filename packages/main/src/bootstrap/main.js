import { app } from 'electron';
import './security-restrictions';
import { restoreOrCreateWindow } from './mainWindow';

const path = require('path')
const os = require('os')
const fs = require('fs')
const fse = require('fs-extra');
/**
 * Prevent electron from running multiple instances.
 */
const isSingleInstance = app.requestSingleInstanceLock();
if (!isSingleInstance) {
	app.quit();
	process.exit(0);
}
app.on('second-instance', restoreOrCreateWindow);

/**
 * Disable Hardware Acceleration to save more system resources.
 */
app.disableHardwareAcceleration();

/**
 * Shout down background process if all windows was closed
 */
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

/**
 * @see https://www.electronjs.org/docs/latest/api/app#event-activate-macos Event: 'activate'.
 */
app.on('activate', restoreOrCreateWindow);





app.whenReady()
	.then(restoreOrCreateWindow)
	.catch((e) => console.error('Failed create window:', e));

/**
 * Check for new version of the application - production mode only.
 */
if (import.meta.env.PROD) {
	app.whenReady()
		.then(() => import('electron-updater'))
		.then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
		.catch((e) => console.error('Failed check updates:', e));
}


const appTmpDir = process.env.TMP_DIR

app.on('ready', () => {
	if (!fs.existsSync(appTmpDir)) {
		fs.mkdirSync(appTmpDir);

	}
	const subfolder = path.join(appTmpDir, 'thumbnails');
	fs.mkdirSync(subfolder);
});

app.on('before-quit', () => {
	fse.emptyDirSync(appTmpDir);
});