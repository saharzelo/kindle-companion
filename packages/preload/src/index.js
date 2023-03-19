/**
 * @module preload
 */

import { initVocabDb } from './database/initConnections';
import { BookInfoRepository } from './database/repository/bookInfoRepository'

export async function getBooks() {
    let c = BookInfoRepository(initVocabDb())
    return c
}
export { initVocabDb } from './database/initConnections';
export { BookInfoRepository } from './database/repository/bookInfoRepository'
export { saveUserData } from './ipc/saveUserData';
export { loadUserData } from './ipc/loadUserData';
export { exportKindleContent } from './ipc/exportKindleContent';
export { ipcRenderer } from 'electron';
