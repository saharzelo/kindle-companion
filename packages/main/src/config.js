import { app } from "electron";
import path from "path";

const APPNAME = "kindle-companion";
const TMPDIR = path.join(app.getPath("temp"), `${APPNAME}`);
const APPDIR = path.join(app.getPath("userData"), `${APPNAME}`);

const defaultConfig = {
    tmpDir: TMPDIR,
    appDir: APPDIR,
    profileDir: path.join(APPDIR, "profiles"),
    vocabFilePath: path.join("system", "vocabulary", "vocab.db")
};

export function getConfig() {
    return defaultConfig;
}
export function setConfig(newConfig) {
    defaultConfig = { ...defaultConfig, ...newConfig };
}
