if (process.env.VITE_APP_VERSION === undefined) {
  const now = new Date();
  process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${now.getUTCMonth() + 1
    }.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`;
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist',
    buildResources: 'buildResources',
  },
  files: ['packages/**/dist/**'],
  extraMetadata: {
    version: process.env.VITE_APP_VERSION,
  },
  appId: "io.saharzelo.github.kindle-companion",
  extends: null,
  win: {
    icon: "icon.png"
  },
  mac: {
    icon: "icon.png"
  },
  linux: {
    synopsis: "Kindle Clippings and vocabulary Manager",
    icon: "icon.icns",
    category: "Development",
    target: [
      "deb",
      "snap"
    ]
  }


};

module.exports = config;
