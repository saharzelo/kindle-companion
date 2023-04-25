import { app } from "electron";
import { getConfig } from "../config";
import path from "path";
import fs from "fs";

const config = getConfig();
const appTmpDir = config.tmpDir;
const appDir = config.appDir;

function initializeFileSystem() {
    const dirPaths = [
        appTmpDir,
        appDir,
        path.join(appDir, "profiles"),
        path.join(appDir, "profiles", "demo_profile"),
        path.join(appTmpDir, "thumbnails"),
    ];

    dirPaths.forEach((dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    });

    app.on("before-quit", () => {
        emptyDirSync(appTmpDir);
    });
}

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

initializeFileSystem();
