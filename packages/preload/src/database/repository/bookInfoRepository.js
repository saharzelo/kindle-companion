import BOOK_INFO from "../entities/BookInfo";

async function getAllBookInfo() {
  return await BOOK_INFO.findAll();
}

async function getBookInfoById(id) {
  return await BOOK_INFO.findByPk(id);
}

async function createBookInfo(bookInfoData) {
  return await BOOK_INFO.create(bookInfoData);
}

async function updateBookInfo(id, bookInfoData) {
  const bookInfo = await getBookInfoById(id);
  if (bookInfo) {
    return await BOOK_INFO.update(bookInfoData);
  }
  return null;
}

async function deleteBookInfo(id) {
  const bookInfo = await getBookInfoById(id);
  if (bookInfo) {
    return await BOOK_INFO.destroy();
  }
  return null;
}

module.exports = {
  getAllBookInfo,
  getBookInfoById,
  createBookInfo,
  updateBookInfo,
  deleteBookInfo
};
