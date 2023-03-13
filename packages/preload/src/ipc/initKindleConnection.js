import { ipcRenderer } from 'electron';

export function initKindleConnection() {
  return new Promise((resolve, reject) => {
    ipcRenderer.invoke('initKindleConnection').then((result) => {
      if (resolve(result) === 'success') {
        resolve(result);
      } else {
        reject(new Error('IPCMain failed to call selectFiles'));
      }
    }).catch((error) => {
      reject(error);
    });
  });
}