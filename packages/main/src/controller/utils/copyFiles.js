import fs from 'fs-extra';

export async function copyFiles(oldPath, newPath) {
  await fs.copy(oldPath, newPath);
}