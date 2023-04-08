import { useState, useEffect } from 'react';
import { vocabDbRepo, getThumbnails } from '#preload';
import './LibraryPage.css';
import BookCatalogItem from '../../components/BookItem/BookCatalogItem';
import BookInfo from '../../components/BookInfo/BookInfo';

function LibraryPage({ profile }) {
    const [bookCatalog, setBookCatalog] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleBookClick = () => {
        setShowModal(true);
    }

    useEffect(() => {
        async function prepKindleData() {
            try {
                let vocabRepo = await vocabDbRepo()
                const bookMetadata = await vocabRepo.findAll();
                const bookId = bookMetadata.map((result) => (result.asin));
                const bookThumbnails = await getThumbnails(bookId)
                const bookCatalog = bookMetadata.map(({ title, asin }, index) => (
                    <BookCatalogItem key={index} title={title} thumbnail={bookThumbnails[asin]} onClick={() => handleBookClick()} />
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
            <BookInfo book={selectedBook} showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
}

export default LibraryPage;
