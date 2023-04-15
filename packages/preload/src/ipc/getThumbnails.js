import { ipcRenderer } from 'electron';

export function getThumbnails(bookAsin) {
  return new Promise((resolve, reject) => {
    ipcRenderer.invoke('getBookThumbnailData', bookAsin).then((result) => {
      resolve(result);
    });
  });
}
;
