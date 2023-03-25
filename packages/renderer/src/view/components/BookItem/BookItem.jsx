import React from 'react';
import './BookItem.css';

function BookPreviewItem({ imageSrc, title, text }) {
  let c = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/416Xx903tRL.jpg'
  return (
    <div className="book-preview-item">
      <div className='book-thumbnail'>
        <img id='book-thumnail' src={c} alt={title} />
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
