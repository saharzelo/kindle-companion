import BookCatalogItem from "../BookCatalogItem/BookCatalogItem";
import "./BooksCatalog.css";
function BooksCatalog({ books, onBookClick }) {
    const booksCatalog = books.map(({ title, asin, thumbnail, meta }, index) => (
        <BookCatalogItem
            key={index}
            title={title}
            thumbnail={thumbnail}
            metadata={meta.wordCount}
            onClick={() => onBookClick(asin)}
        />
    ));

    return <div className="book-catalog-container">{booksCatalog}</div>;
}

export default BooksCatalog;
