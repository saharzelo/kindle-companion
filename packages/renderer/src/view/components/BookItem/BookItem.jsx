import React from 'react';
import './BookItem.css';

function BookPreviewItem({ imageSrc, title, text }) {
    let c = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/416Xx903tRL.jpg'
  return (
    <div className="book-preview-item">
      <img src={c} alt={title} />
      <h3>Anna Frank's</h3>
      <p>Words: Clippings:</p>
    </div>
  );
}

export default BookPreviewItem;
