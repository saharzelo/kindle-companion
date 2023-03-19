/**
 * @module preload
 */

import { initVocabDb } from './database/initConnections';
import {BookInfoRepository} from './database/vocabDb/repository/bookInfoRepository'



const vocabDbConn = initVocabDb()
let repo = BookInfoRepository(vocabDbConn)

console.log(repo.findAll().then((r)=> {console.log(r)}))
// vocabDbConn.models.BOOK_INFO.findAndCountAll().then((res) => {console.log(res)}).catch((err) => {console.log(err)})

export { saveUserData } from './ipc/saveUserData';
export { loadUserData } from './ipc/loadUserData';
export { exportKindleContent } from './ipc/exportKindleContent';
export { ipcRenderer } from 'electron';
