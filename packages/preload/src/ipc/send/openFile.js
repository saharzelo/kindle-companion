import { ipcRenderer } from 'electron';

export function openFile() {
  ipcRenderer.send('selectFiles');
}
