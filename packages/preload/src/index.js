/**
 * @module preload
 */

import { findLatestWordDate } from './database/repository/wordRepository';
import { findBooksByDate } from './database/repository/bookInfoRepository';
import { findLookupsByDate } from './database/repository/lookupRepository';

const getMe = async () => {
    const date = await findLatestWordDate()
    console.log(typeof (date.latest_date))
    console.log(await findBooksByDate(date.latest_date))
    console.log(await findLookupsByDate(date.latest_date))

}
getMe()



export { findLatestWordDate } from './database/repository/wordRepository';
export { findBooksByDate } from './database/repository/bookInfoRepository';
export { findLookupsByDate } from './database/repository/lookupRepository';
export { findLookupsByAsin } from './database/repository/lookupRepository'
export { findAllBooks, findBookByAsin } from './database/repository/bookInfoRepository'
export { getThumbnails } from './ipc/getThumbnails';
export { exportKindleContent } from './ipc/exportKindleContent';
