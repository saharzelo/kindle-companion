import { app } from "electron";
import { getConfig } from "../config";
import path from "path";
import fs from "fs";
import fsExtra from "fs-extra";

function initializeFileSystem() {
    const config = getConfig();

    const dirPaths = [
        config.tmpDir,
        config.appDir,
        path.join(config.profileDir),
        path.join(config.profileDir, "demo_profile"),
        path.join(config.tmpDir, "thumbnails"),
    ];

    dirPaths.forEach((dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    });
    app.on("ready", () => {
        createDemoProfile();
    });

    app.on("before-quit", () => {
        emptyDirSync(config.tmpDir);
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

function createDemoProfile() {
    const ressourcesPath = import.meta.env.PROD
        ? process.resourcesPath
        : app.getAppPath();
    const sourcePath = path.join(
        ressourcesPath,
        "buildResources",
        "demo_profile"
    );
    const destinationPath = path.join(getConfig().profileDir, "demo_profile");

    if (fs.readdirSync(destinationPath).length === 0) {
        fsExtra.copySync(
            sourcePath,
            destinationPath,
            { overwrite: false },
            (err) => {
                if (err) {
                    console.error("Error copying database file:", err);
                }
            }
        );    }
}

initializeFileSystem();
