
import { Sequelize } from "sequelize";
import { BookInfo } from './entities/BookInfo'

export const initVocabDb = () => {
    const config = {
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true,
            timestamps: false
        }
    };
    const conn = new Sequelize('sqlite::/tmp/vocab.db', config);
    BookInfo(conn)
    // init models
    conn.sync().then(() => {
        // sync models
        console.log("db synced")
    })

    // 
    return conn;
};

