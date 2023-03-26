import { node } from '../../.electron-vendors.cache.json';
import { join } from 'path';

const PACKAGE_ROOT = __dirname;
const os = require('os');
const path = require('path');
/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
	mode: process.env.MODE,
	root: PACKAGE_ROOT,
	envDir: process.cwd(),
	resolve: {
		alias: {
			'/@/': join(PACKAGE_ROOT, 'src') + '/',
		},
	},
	define: {
		'process.env': {
			TMP_DIR: path.join(os.tmpdir(), 'kindle-companion'),
		},
	},
	build: {
		ssr: true,
		sourcemap: 'inline',
		target: `node${node}`,
		outDir: 'dist',
		assetsDir: '.',
		minify: process.env.MODE !== 'development',
		lib: {
			entry: 'src/index.js',
			formats: ['cjs'],
		},
		rollupOptions: {
			output: {
				entryFileNames: '[name].cjs',
			},
		},
		emptyOutDir: true,
		reportCompressedSize: false,
	},
};

export default config;
