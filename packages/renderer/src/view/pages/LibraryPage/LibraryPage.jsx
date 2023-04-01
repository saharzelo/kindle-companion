import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import { vocabDbRepo, getThumbnails } from '#preload';
import './LibraryPage.css';
import BookCatalogItem from '../../components/BookItem/BookCatalogItem';

function LibraryPage({ }) {
    const [bookCatalog, SetBookCatalog] = useState([]);

    useEffect(() => {
        async function prepKindleData() {
            try {
                let vocabRepo = await vocabDbRepo()
                const booksMetadata = await vocabRepo.findAll()
                const bookId = booksMetadata.map((result) => (result.asin));
                const bookThumbnails = await getThumbnails(bookId)

                const bookCatalog = booksMetadata.map((book, index) => (
                    <BookCatalogItem
                        key={index}
                        title={book.title}
                        thumbnail={bookThumbnails[book.asin]}
                    />
                ));

                SetBookCatalog(bookCatalog);
            } catch (error) {
                console.error(error);
            }
        }
        prepKindleData();
    }, []);

    return (
        <div className="library-page">
            {/* {image} */}
            <Sidebar />
            <div className="main-container">
                <Topbar />
                <div className="catalog-wrapper">
                    <div className="catalog-header"> <h3>Your Library: </h3></div>

                    <div className="catalog-container">
                        {bookCatalog}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LibraryPage;