/**
 * @module preload
 */


// testing, export later
import { initVocabDb } from './database/initConnections';
import { BookInfoRepository } from './database/repository/bookInfoRepository'
import { ipcRenderer } from 'electron';

export async function getBooks() {
  let c = BookInfoRepository(initVocabDb())
  return c
}


export function getImage() {
  return new Promise((resolve, reject) => {

    ipcRenderer.invoke('chooseFile').then((result) => {
      const src = `data:image/jpg;base64,${result}`
      resolve(src);
    })
  })
}





export { initVocabDb } from './database/initConnections';
export { BookInfoRepository } from './database/repository/bookInfoRepository'
export { saveUserData } from './ipc/saveUserData';
export { loadUserData } from './ipc/loadUserData';
export { exportKindleContent } from './ipc/exportKindleContent';
export { ipcRenderer } from 'electron';
