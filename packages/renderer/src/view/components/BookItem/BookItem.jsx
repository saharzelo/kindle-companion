import React from 'react';
import './BookItem.css';

function BookPreviewItem({ thumbnail, title, metadata }) {
  let c = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/416Xx903tRL.jpg'
  return (
    <div className="book-preview-item">
      <div className='book-thumbnail'>
        {thumbnail ? (
          <img id='book-thumnail' src={thumbnail} alt={title} />

        ) : (
          <div className="missing-thumbnail-container">
            <div class="missing-thumbnail">{title.charAt(0)}</div>
          </div>

        )
        }



      </div>
      <div className="book-title">
        <h6>{title}</h6>
      </div>
      <div className="book-info">
        <span>Vocabulary: 54</span> <span>Clippings: 22</span>
      </div>

    </div>
  );
}

export default BookPreviewItem;
