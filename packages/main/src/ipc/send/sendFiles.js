const { dialog } = require('electron');


export function sendFiles(event) {
    const options = { title: 'Select a file', properties: ['openDirectory'] };
    dialog.showOpenDialog(options).then((result) => {
        if (!result.canceled) {
            const folderPath = result.filePaths[0];
            const filePath = folderPath + '/system/vocabulary/vocab.db';
            event.sender.send('fileContent', filePath);
        }
    }).catch((err) => {
        console.log(err);
    });
};
