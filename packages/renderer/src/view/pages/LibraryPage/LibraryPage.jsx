import { useState, useEffect } from "react";
import "./LibraryPage.css";
import BooksCatalog from "../../components/BooksCatalog/BooksCatalog";
import BookInfoModal from "../../components/BookInfoModal/BookInfoModal";
import { prepKindleData } from "../../../controller/services/kindleServices";

function LibraryPage({ profile }) {
  const [kindleData, setKindleData] = useState([]);
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBookClick = (asin) => {
    setSelectedBookAsin(asin);
    setShowModal(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = kindleData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function fetchData() {
      const data = await prepKindleData()
      setKindleData(data)
    }
    fetchData();
  }, []);



  return (
    <div className="catalog-wrapper">
      <div className="catalog-header">
        <h3>Your Library: </h3>
        <input
          type="text"
          placeholder="Search Books..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <BooksCatalog
        books={filteredBooks}
        onBookClick={handleBookClick}
      />

      {showModal && (
        <BookInfoModal
          bookAsin={selectedBookAsin}
          setShowModal={setShowModal}
          thumbnail={null}
        />
      )}
    </div>
  );
}

export default LibraryPage;
