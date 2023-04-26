import { ipcRenderer } from "electron";

export async function getThumbnailsByAsin(bookAsin) {
    return await ipcRenderer.invoke("getBookThumbnailData", bookAsin);
}
