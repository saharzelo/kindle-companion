import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import { vocabDbRepo, getThumbnails } from '#preload';
import './LibraryPage.css';
import BookCatalogItem from '../../components/BookItem/BookCatalogItem';

function LibraryPage({ profile }) {
    const [bookCatalog, SetBookCatalog] = useState([]);

    useEffect(() => {
        async function prepKindleData() {
            try {
                let vocabRepo = await vocabDbRepo()
                const bookMetadata = await vocabRepo.findAll();
                const bookId = bookMetadata.map((result) => (result.asin));
                const bookThumbnails = await getThumbnails(bookId)

                const bookCatalog = bookMetadata.map(({ title, asin }, index) => (
                    <BookCatalogItem key={index} title={title} thumbnail={bookThumbnails[asin]} />
                ));

                SetBookCatalog(bookCatalog);
            } catch (error) {
                console.error(error);
            }
        }
        prepKindleData();
    }, []);

    return (

        <div className="catalog-wrapper">
            <div className="catalog-header"> <h3>Your Library: </h3></div>

            <div className="catalog-container">
                {bookCatalog}
            </div>
        </div>

    );
}

export default LibraryPage;