import { app } from "electron";
import { getConfig } from "../config";
import path from "path";
import fs from "fs";

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
        if (import.meta.env.PROD) {
            createDemoProfile();
        }
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
    const sourcePath = path.join(
        __dirname,
        "buildResources",
        "demo_profile",
        "vocab.db"
    );
    const destinationPath = path.join(
        getConfig().profileDir,
        "demo_profile",
        "vocab.db"
    );

    if (fs.existsSync(destinationPath)) {
        return;
    }

    // Copy the source file to the destination file
    fs.copyFile(sourcePath, destinationPath, (err) => {
        if (err) {
            console.error("Error copying database file:", err);
        } else {
            console.log("Database file successfully copied.");
        }
    });
}

initializeFileSystem();
