import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";
import "./BooksCatalog.css"
function BooksCatalog({ books, thumbnails, onBookClick }) {
  const booksCatalog = books.map(({ title, asin }, index) => (
    <BookCatalogItem
      key={index}
      title={title}
      thumbnail={thumbnails[asin]}
      metadata={asin}
      onClick={() => onBookClick(asin)}
    />
  ));

  return (
    <div className="book-catalog-container">
      {booksCatalog}
    </div>
  );
}

export default BooksCatalog;
