import { BookInfo } from "../entities/BookInfo";

export const BookInfoRepository = (dbController) => {
  const repository = {
    findAll: async () => {
      const books = await BookInfo(dbController).findAll();
      return books;
    },
    findById: async (id) => {
      const book = await BookInfo(dbController).findByPk(id);
      return book;
    },
    create: async (book) => {
      const createdBook = await BookInfo(dbController).create(book);
      return createdBook;
    },
    update: async (book) => {
      const updatedBook = await book.save();
      return updatedBook;
    },
    delete: async (book) => {
      await book.destroy();
    }
  }
  return repository
};