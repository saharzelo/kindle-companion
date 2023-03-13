export const READ_ALL = `select
                            w.word,
                            l.usage as usage
                            ,w.timestamp as timestamp
                            ,b.title as book
                            FROM
                            WORDS w
                            LEFT JOIN LOOKUPS l
                            on l.word_key=w.id
                            LEFT JOIN BOOK_INFO b
                            on b.id=l.id
                            GROUP BY
                            w.word
                            ORDER BY timestamp ASC, book ASC`;
export const WORDS_BY_BOOK = `SELECT lookups.timestamp , book_info.title, words.stem, words.word, lookups.usage
                            FROM lookups
                            LEFT OUTER JOIN book_info ON lookups.book_key=book_info.id
                            LEFT OUTER JOIN words ON lookups.word_key=words.id
                            ORDER BY lookups.timestamp desc
                            `;
export const BOOK_NAMES = `select
                            b.title,
                            b.authors
                            from BOOK_INFO b`;
export const BOOK_DETAIL = `select
                            b.title,
                            b.authors,
                            MIN(w.timestamp) as minTime,
                            MAX(w.timestamp) as maxTime,
                            
                            strftime('%m/%d/%Y', datetime(MIN(w.timestamp) /1000, 'unixepoch')) formattedMinTime,
                            strftime('%m/%d/%Y', datetime(MAX(w.timestamp) /1000, 'unixepoch')) formattedMaxTime,
                            
                            count(*) as allwords
                            FROM
                            WORDS w
                            LEFT JOIN LOOKUPS l
                            on l.word_key=w.id
                            LEFT JOIN BOOK_INFO b
                            on b.guid=l.book_key
                            GROUP BY
                            b.title
                            ORDER BY minTime ASC`;
export const WORDS_BY_TIME = `select
                            w.word,
                            l.usage as usage,
                            b.title as book,
                            strftime('%m/%d/%Y', datetime(w.timestamp /1000, 'unixepoch')) formattedTime
                            FROM
                            WORDS w
                            LEFT JOIN LOOKUPS l
                            on l.word_key=w.id
                            LEFT JOIN BOOK_INFO b
                            on b.guid=l.book_key
                            where book = ?
                            and
                            formattedTime between ? and ?
                            GROUP BY
                            w.word
                            ORDER BY formattedTime ASC, book ASC`;
