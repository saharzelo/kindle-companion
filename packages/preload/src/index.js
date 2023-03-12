/**
 * @module preload
 */

export { saveUserData } from './ipc/send/saveUserData';
export {loadUserData} from './ipc/send/loadUserData';
export { openFile } from './ipc/send/openFile';
export { ipcRenderer } from 'electron'
