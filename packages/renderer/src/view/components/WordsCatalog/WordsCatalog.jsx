import WordCatalogItem from "../WordCatalogItem/WordCatalogItem";
import "./WordsCatalog.css"
function WordsCatalog({ words, onWordClick }) {

    const wordsCatalog = words.map(({word, asin }, index) => (
        <WordCatalogItem
            key={index}
            word={word}
        />
    ));
    console.log('dad', wordsCatalog)

    return (
        <div className="words-catalog-container">
            {wordsCatalog}
        </div>
    );
}

export default WordsCatalog;
