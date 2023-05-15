import WordCatalogItem from "../WordCatalogItem/WordCatalogItem";
import "./WordsCatalog.css"

function WordsCatalog({ words, onWordClick }) {
    const wordsCatalog = words.map(({ word }, index) => (
        <WordCatalogItem
            key={index}
            word={word}
            onClick={() => onWordClick(word)}
        />
    ));

    return (
        <div className="words-catalog-container">
            {wordsCatalog}
        </div>
    );
}

export default WordsCatalog;
