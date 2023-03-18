/**
 * @module preload
 */
// const { DataSource } = require('typeorm');

// const AppDataSource = new DataSource({
//     type: "sqlite",
//     database: "/tmp/vocab.db",
// })

// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//     })
//     .catch((error) => console.log(error))
import { ipcRenderer } from 'electron';

import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite:/tmp/vocab.db');

export function testing() {
    return new Promise((resolve) => {
        sequelize.query('SELECT title FROM BOOK_INFO')
            .then(results => {
                resolve(results)
            })
            .catch(error => {
                console.error(error);
            });
    });


}
// or any other driver package
// export { initConnection } from './database/initConnection'
export { saveUserData } from './ipc/saveUserData';
export { loadUserData } from './ipc/loadUserData';
export { exportKindleContent } from './ipc/exportKindleContent';
export { ipcRenderer } from 'electron';
