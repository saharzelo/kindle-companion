import {chrome} from '../../.electron-vendors.cache.json';
import {join} from 'path';
import react from '@vitejs/plugin-react';
import {renderer} from 'unplugin-auto-expose';
import svgr from 'vite-plugin-svgr' 

const PACKAGE_ROOT = __dirname;

const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html'),
    },
    emptyOutDir: true,
    reportCompressedSize: false,
  },
  plugins: [
    react(),
    svgr(),
    renderer.vite({
      preloadEntry: join(PACKAGE_ROOT, '../preload/src/index.js'),
    }),
  ],
};

export default config;
