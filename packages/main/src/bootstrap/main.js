import { app } from "electron";
import "./security-restrictions";
import { restoreOrCreateWindow } from "./mainWindow";
import defaultConfig from "../config";
import "../controller/ipc/getConfig";
import "../controller/ipc/exportKindleContent";
import "../controller/ipc/getBookThumbnailData";
import path from "path";
import fs from "fs";

/**
 * Prevent electron from running multiple instances.
 */
const isSingleInstance = app.requestSingleInstanceLock();
if (!isSingleInstance) {
    app.quit();
    process.exit(0);
}
app.on("second-instance", restoreOrCreateWindow);

/**
 * Shout down background process if all windows was closed
 */
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

/**
 * @see https://www.electronjs.org/docs/latest/api/app#event-activate-macos Event: 'activate'.
 */
app.on("activate", restoreOrCreateWindow);

app.whenReady()
    .then(restoreOrCreateWindow)
    .catch((e) => console.error("Failed create window:", e));

/**
 * Check for new version of the application - production mode only.
 */
if (import.meta.env.PROD) {
    app.whenReady()
        .then(() => import("electron-updater"))
        .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
        .catch((e) => console.error("Failed check updates:", e));
}

const appTmpDir = defaultConfig.tmpDir;
const thumbnailDir = path.join(appTmpDir, "thumbnails");
console.log(defaultConfig.appDir)
app.on("ready", () => {
    if (!fs.existsSync(appTmpDir)) {
        fs.mkdirSync(appTmpDir);
    }


    fs.mkdirSync(thumbnailDir);
});

app.on("before-quit", () => {
    emptyDirSync(appTmpDir);
});

function emptyDirSync(dir) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((file) => {
            const filePath = path.join(dir, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                emptyDirSync(filePath);
                fs.rmdirSync(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });
    }
}
