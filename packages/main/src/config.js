import { app } from "electron";
import path from 'path';

const tmpDir = app.getPath("temp")

const defaultConfig = {
    appName: "Kindle-Companion",
    tmpDir: path.join(tmpDir, 'kindle-companion'),
};

export function getConfig() {
    return defaultConfig;
}

export default defaultConfig;