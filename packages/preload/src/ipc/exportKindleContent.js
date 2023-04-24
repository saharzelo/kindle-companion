import { ipcRenderer } from 'electron';

export async function exportKindleContent() {
  try {
    const result = await ipcRenderer.invoke('kindle/export-content');
    if (result === 'success') {
      console.log(result)
      return result;
    } else {
      console.error('IPCMain failed to call selectFiles');
    }
  } catch (error) {
    console.error(error);
  }
}
