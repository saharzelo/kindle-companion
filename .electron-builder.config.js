if (process.env.VITE_APP_VERSION === undefined) {
    const now = new Date();
    process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${
        now.getUTCMonth() + 1
    }.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`;
}

const config = {
    directories: {
        output: "dist",
        buildResources: "buildResources",
    },
    extraFiles: ["buildResources/demo_profile/vocab.db"],
    files: ["packages/**/dist/**"],
    extraMetadata: {
        version: process.env.VITE_APP_VERSION,
    },
    appId: "io.saharzelo.github.kindle-companion",
    extends: null,
    win: {
        icon: "icon.png",
    },
    mac: {
        icon: "icon.png",
    },
    linux: {
        synopsis: "Clippings and Lookups Manager",
        icon: "icon.icns",
        category: "Development",
        target: ["deb", "snap"],
    },
};

module.exports = config;
