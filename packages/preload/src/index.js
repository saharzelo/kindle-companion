/**
 * @module preload
 */

import { ipcRenderer } from 'electron';


export function getImage(bookIds) {
  return new Promise((resolve, reject) => {
    ipcRenderer.invoke('getBookThumbnailData', bookIds).then((result) => {
      resolve(result);
    });
  });
};


export { vocabDbRepo } from './ipc/vocabDbRepo';
export { initVocabDb } from './database/initConnections';
export { exportKindleContent } from './ipc/exportKindleContent';
export { ipcRenderer } from 'electron';
