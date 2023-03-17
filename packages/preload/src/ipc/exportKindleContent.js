import { ipcRenderer } from 'electron';

export function exportKindleContent() {
  return new Promise((resolve, reject) => {
    ipcRenderer.invoke('exportKindleContent').then((result) => {
      console.log('helllo')
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