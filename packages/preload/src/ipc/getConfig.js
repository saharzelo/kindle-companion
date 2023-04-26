import { ipcRenderer } from "electron";

export const getConfig = async () => {
  try {
    const config = await ipcRenderer.invoke('getConfig');
    return config;
  } catch (error) {
    console.error("Error getting configuration:", error);
  }
};