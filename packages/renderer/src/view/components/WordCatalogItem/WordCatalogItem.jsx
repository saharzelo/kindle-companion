import { stringUtils } from "../../../controller/helpers/stringUtils";
import "./WordCatalogItem.css";

function WordCatalogItem({ word, onClick }) {
    return (
        <div className="word-preview-item" onClick={onClick}>
            <span>{stringUtils.ucFirst(word)}</span>
        </div>
    );
}

export default WordCatalogItem;
