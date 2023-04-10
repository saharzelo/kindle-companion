import { getConnection } from '../createConnection'


export function findAllBooks() {
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


export function findBookByAsin(asin) {
  const con = getConnection();
  const query = `
  SELECT
    b.title as title,
    b.authors as author,
    strftime('%m/%d/%Y', datetime(MIN(w.timestamp) /1000, 'unixepoch')) minTime,
    strftime('%m/%d/%Y', datetime(MAX(w.timestamp) /1000, 'unixepoch')) maxTime,
    IFNULL(count(*), 0) as wordCount
  FROM
    WORDS w
    LEFT JOIN LOOKUPS l ON l.word_key=w.id
    LEFT JOIN BOOK_INFO b ON b.guid=l.book_key
  WHERE
    b.asin = ?
  GROUP BY
    b.title
  ORDER BY
    minTime ASC;
  `;
  return new Promise((resolve, reject) => {
    con.get(query, [asin], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
