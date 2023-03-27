/**
 * @module preload
 */

import { ipcRenderer } from 'electron';


export function getImage(bookIds) {
  return new Promise((resolve, reject) => {
    ipcRenderer.invoke('chooseFile', bookIds).then((result) => {
      const src = `data:image/jpg;base64,${result}`
      resolve(src);
    })
  })
}


export { vocabDbRepo } from './ipc/vocabDbRepo';
export { initVocabDb } from './database/initConnections';
export { exportKindleContent } from './ipc/exportKindleContent';
export { ipcRenderer } from 'electron';
