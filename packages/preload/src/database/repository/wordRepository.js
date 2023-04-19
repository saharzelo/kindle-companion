import { getConnection } from '../createConnection'


async function getWordCount() {
    const con = await getConnection();
    const query = "SELECT COUNT(*) as wordCount FROM WORDS";
    return new Promise((resolve, reject) => {
      con.get(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  
  
  export const wordRepo = {
    getWordCount
  }
  