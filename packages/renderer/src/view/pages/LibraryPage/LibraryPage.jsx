import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import { vocabDbRepo, getThumbnails } from '#preload';
import './LibraryPage.css';
import BookCatalogItem from '../../components/BookItem/BookCatalogItem';

function LibraryPage({ profile }) {
    // const userElements = profile.map((user, index) => (
    //     <div key={index}>
    //         <h2>{user.title}</h2>
    //     </div>
    // ));
    const [image, setImage] = useState(null)

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let repo = await vocabDbRepo()
                const bookInfo = await repo.findAll()
                const bookIds = bookInfo.map((result) => (result.asin));
                const thumbBase64 = await getThumbnails(bookIds)


                const userElements = bookInfo.map((book, index) => (
                    <div key={index}>
                        <BookCatalogItem title={book.title} thumbnail={thumbBase64[book.asin]} />
                    </div>
                ));
                setData(userElements);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
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
                        {data}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LibraryPage;