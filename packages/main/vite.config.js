import { node } from '../../.electron-vendors.cache.json';
import { join } from 'path';

const PACKAGE_ROOT = __dirname;

const config = {
	mode: process.env.MODE,
	root: PACKAGE_ROOT,
	envDir: process.cwd(),
	resolve: {
		alias: {
			'/@/': join(PACKAGE_ROOT, 'src') + '/',
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
