const { DataSource } = require('typeorm');

export async function dbHandler(databasePath) {
    const AppDataSource = new DataSource({
        type: "sqlite",
        database: databasePath,
    })
    return AppDataSource
}
