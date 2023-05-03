import sqlite3 from "sqlite3";
import { getConfig } from "../ipc/getConfig";

let connection;

function createConnection(dbFilePath) {
    dbFilePath = dbFilePath + "/vocab.db";
    connection = new sqlite3.Database(dbFilePath, (err) => {
        if (err) {
            console.error(err.message);
        } else {
        }
    });
}

async function getConnection() {
    const config = await getConfig();
    const dbFilePath = config.currDir;

    if (!connection || connection.filename !== dbFilePath) {
        createConnection(dbFilePath);
    }
    connection.on("trace", (query) => {
        console.log(`Executing query: ${query}`);
    });
    return connection;
}

export async function runQuery(query, params, method = "all") {
    try {
        const con = await getConnection();
        const rows = await new Promise((resolve, reject) => {
            con[method](query, params, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
        return rows;
    } catch (err) {
        console.error(err);
    }
}
