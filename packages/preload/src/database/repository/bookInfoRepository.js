import {getConnection} from '../createConnection'


export function findAll() {
  const con = getConnection();
  const query = 'SELECT * FROM BOOK_INFO';
  return new Promise((resolve, reject) => {
    con.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
