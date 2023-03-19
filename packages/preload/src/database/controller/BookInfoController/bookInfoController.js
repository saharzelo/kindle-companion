import bookInfoRepository from "../../repository/bookInfoRepository"

async function getAllBookInfo(req, res) {
  const bookInfo = await bookInfoRepository.getAllBookInfo();
  res.status(200).json(bookInfo);
}

async function getBookInfoById(req, res) {
  const { id } = req.params;
  const bookInfo = await bookInfoRepository.getBookInfoById(id);
  if (bookInfo) {
    res.status(200).json(bookInfo);
  } else {
    res.status(404).json({ message: 'Book Info not found' });
  }
}

async function createBookInfo(req, res) {
  const bookInfoData = req.body;
  const bookInfo = await bookInfoRepository.createBookInfo(bookInfoData);
  res.status(201).json(bookInfo);
}

async function updateBookInfo(req, res) {
  const { id } = req.params;
  const bookInfoData = req.body;
  const updatedBookInfo = await bookInfoRepository.updateBookInfo(id, bookInfoData);
  if (updatedBookInfo) {
    res.status(200).json(updatedBookInfo);
  } else {
    res.status(404).json({ message: 'Book Info not found' });
  }
}

async function deleteBookInfo(req, res) {
  const { id } = req.params;
  const deletedBookInfo = await bookInfoRepository.deleteBookInfo(id);
  if (deletedBookInfo) {
    res.status(200).json(deletedBookInfo);
  } else {
    res.status(404).json({ message: 'Book Info not found' });
  }
}

module.exports = {
  getAllBookInfo,
  getBookInfoById,
  createBookInfo,
  updateBookInfo,
  deleteBookInfo
};
