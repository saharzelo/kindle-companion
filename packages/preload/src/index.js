/**
 * @module preload
 */

import { BookInfo } from './database/entities/BookInfo';
import { initVocabDb } from './database/initConnections';


const vocabDbConn = initVocabDb()


vocabDbConn.models.BOOK_INFO.findAndCountAll().then((res) => {console.log(res)}).catch((err) => {console.log(err)})
export { saveUserData } from './ipc/saveUserData';
export { loadUserData } from './ipc/loadUserData';
export { exportKindleContent } from './ipc/exportKindleContent';
export { ipcRenderer } from 'electron';
