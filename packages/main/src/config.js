import { app } from "electron";
import path from "path";

const APPNAME = "kindle-companion";
const TMPDIR = path.join(app.getPath("temp"), `${APPNAME}`);
const APPDIR = path.join(app.getPath("userData"), `${APPNAME}`);

let defaultConfig = {
    tmpDir: TMPDIR,
    appDir: APPDIR,
    profileDir: path.join(APPDIR, "profiles"),
    vocabFilePath: path.join("system", "vocabulary", "vocab.db"),
    currDir: TMPDIR
};

export function getConfig() {
    return defaultConfig;
}
export function setConfig(newConfig) {
    defaultConfig = { ...defaultConfig, ...newConfig };
}
