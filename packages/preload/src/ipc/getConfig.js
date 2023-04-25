import { ipcRenderer } from "electron";

export const getConfig = async () => await ipcRenderer.invoke('getConfig');
