import { ipcRenderer } from "electron";

export function getThumbnailsByAsin(bookAsin) {
  return ipcRenderer.invoke("getBookThumbnailData", bookAsin);
}
