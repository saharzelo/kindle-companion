import { app } from "electron";
import path from "path";

const appName = "kindle-companion";
const tmpDir = path.join(app.getPath("temp"), `${appName}`);
const appDir = path.join(app.getPath("userData"), `${appName}`);


const defaultConfig = {
    tmpDir: tmpDir,
    appDir: appDir,
};

export function getConfig() {
    return defaultConfig;
}

export function setConfig() {}

export default defaultConfig;
