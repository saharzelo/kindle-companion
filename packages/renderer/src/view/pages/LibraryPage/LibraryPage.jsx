import { useState, useEffect } from 'react';
import { getThumbnails, findAllBooks } from '#preload';
import './LibraryPage.css';
import BookCatalogItem from '../../components/BookCatalogItem/BookCatalogItem';
import BookInfo from '../../components/BookInfoModal/BookInfoModal';

function LibraryPage({ profile }) {
    const [bookCatalog, setBookCatalog] = useState([]);
    const [selectedBookAsin, setSelectedBookAsin] = useState(null);
    const [bookThumbnails, setBookThumbnails] = useState(null)
    const [showModal, setShowModal] = useState(false);

    const handleBookClick = (asin) => {
        setSelectedBookAsin(asin)
        setShowModal(true);
    }

    useEffect(() => {
        async function prepKindleData() {
            try {
                const books = await findAllBooks();
                const bookId = books.map((result) => (result.asin));
                const base64Thumbnails = await getThumbnails(bookId)
                setBookThumbnails(base64Thumbnails)
                const bookCatalog = books.map(({ title, asin }, index) => (
                    <BookCatalogItem
                        key={index}
                        title={title}
                        thumbnail={base64Thumbnails[asin]}
                        metadata={asin}
                        onClick={() => handleBookClick(asin)}
                    />
                ));
                setBookCatalog(bookCatalog);
            } catch (error) {
                console.error(error);
            };
        }
        prepKindleData();
    }, []);

    return (
        <div className="catalog-wrapper">
            <div className="catalog-header">
                <h3>Your Library: </h3>
            </div>

            <div className="catalog-container">
                {bookCatalog}
            </div>
            {showModal &&
                <BookInfo bookAsin={selectedBookAsin} showModal={showModal} setShowModal={setShowModal} thumbnail={bookThumbnails[selectedBookAsin]} />
            }
        </div>
    );
}

export default LibraryPage;
