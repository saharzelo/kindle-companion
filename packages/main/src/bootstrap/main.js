import { app } from "electron";
import "./securityRestrictions";
import { restoreOrCreateWindow } from "./mainWindow";
import "./fileSystemInitializer"
import "../controller/ipc/getConfig";
import "../controller/ipc/extractKindleContent";
import "../controller/ipc/getBookThumbnailData";
import "../controller/ipc/getProfiles"

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

