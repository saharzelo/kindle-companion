import { ipcRenderer } from 'electron';

export function getThumbnails(bookIds) {
  return new Promise((resolve, reject) => {
    ipcRenderer.invoke('getBookThumbnailData', bookIds).then((result) => {
      resolve(result);
    });
  });
}
;
