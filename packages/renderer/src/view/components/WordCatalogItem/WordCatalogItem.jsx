import './WordCatalogItem.css';

function WordCatalogItem({ word, onClick }) {
  return (
    <div className="word-preview-item" onClick={onClick}>
      {word.charAt(0).toUpperCase() + word.slice(1)}
    </div>
  );
}

export default WordCatalogItem;
