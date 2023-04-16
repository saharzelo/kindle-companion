import './WordCatalogItem.css';

function WordCatalogItem({ word }) {
  return (
    <div className="word-preview-item">

      {word.charAt(0).toUpperCase() + word.slice(1)}


      {/* <div className='book-thumbnail'>
        {thumbnail ?
          (
            <img id='book-thumnail' src={thumbnail} alt={title} />
          ) : (
            <div className="missing-thumbnail-wrapper">
              <div className="missing-thumbnail">{title.charAt(0)}</div>
            </div>
          )
        }
      </div>
      <div className="book-title">
        <h6>{title}</h6>
      </div>
      <div className="book-info">
        <span>Vocabulary: 54</span> <span>Clippings: 22</span>
      </div> */}

    </div>
  );
}

export default WordCatalogItem;
