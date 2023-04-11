import { useState, useEffect } from "react";
import { getThumbnails, findAllBooks } from "#preload";
import "./LibraryPage.css";
import BooksCatalog from "../../components/BooksCatalog/BooksCatalog";
import BookInfo from "../../components/BookInfoModal/BookInfoModal";

function LibraryPage({ profile }) {
  const [books, setBooks] = useState([]);
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);
  const [thumbnails, setThumbnails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBookClick = (asin) => {
    setSelectedBookAsin(asin);
    setShowModal(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    async function prepKindleData() {
      try {
        const books = await findAllBooks();
        const bookId = books.map((result) => result.asin);
        const thumbnails = await getThumbnails(bookId);
        setThumbnails(thumbnails);
        setBooks(books);
      } catch (error) {
        console.error("error loading book catalog items, error:\n", error);
      }
    }
    prepKindleData();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="catalog-wrapper">
      <div className="catalog-header">
        <h3>Your Library: </h3>
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <BooksCatalog
        books={filteredBooks}
        thumbnails={thumbnails}
        onBookClick={handleBookClick}
      />

      {showModal && (
        <BookInfo
          bookAsin={selectedBookAsin}
          setShowModal={setShowModal}
          thumbnail={thumbnails[selectedBookAsin]}
        />
      )}
    </div>
  );
}

export default LibraryPage;
