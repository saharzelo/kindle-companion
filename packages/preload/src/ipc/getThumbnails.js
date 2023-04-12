import { ipcRenderer } from 'electron';

export function getThumbnails(booksId) {
  return new Promise((resolve, reject) => {
    ipcRenderer.invoke('getBookThumbnailData', booksId).then((result) => {
      resolve(result);
    });
  });
}
;
