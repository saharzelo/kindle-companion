
import  { Sequelize } from "sequelize";
import { BookInfo } from "./entities/BookInfo";


const opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        timestamps: false
    }
};

export const initVocabDb = () => {
    const conn = new Sequelize('sqlite::/tmp/vocab.db', opts);
    BookInfo(conn)
    // init models
    conn.sync().then(() => {
        // sync models
        console.log("Droand re-sync db.")
      })

    // 
    return conn;
};

