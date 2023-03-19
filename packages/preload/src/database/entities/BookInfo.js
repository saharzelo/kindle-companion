import { DataTypes } from "sequelize";


export const BookInfo = (dbDriver) => {
  const BOOK_INFO = dbDriver.define('BOOK_INFO', {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false
    },
    asin: {
      type: DataTypes.TEXT
    },
    guid: {
      type: DataTypes.TEXT
    },
    lang: {
      type: DataTypes.TEXT
    },
    title: {
      type: DataTypes.TEXT
    },
    authors: {
      type: DataTypes.TEXT
    }
  });
  return BOOK_INFO
}

