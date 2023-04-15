import WordCatalogItem from "../WordCatalogItem/WordCatalogItem";
import "./WordsCatalog.css"
function WordsCatalog({ words, onBookClick }) {

    const wordsCatalog = words.map(({word, asin }, index) => (
        <WordCatalogItem
            word={word}
        />
    ));

    return (
        <div className="books-catalog-container">
            {wordsCatalog}
        </div>
    );
}

export default WordsCatalog;
