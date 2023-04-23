import { format } from "../../../controller/helpers/format"
import './WordCatalogItem.css';

function WordCatalogItem({ word, onClick }) {

  return (
    <div className="word-preview-item" onClick={onClick}>
      <span>{format.ucFirst(word)}</span>
    </div>
  );


}

export default WordCatalogItem;
