import { ipcMain } from 'electron';
import { getConfig } from '../../config';


ipcMain.handle('get-config', async (event) => {
  return getConfig();
});