import './HomePage.css'
import { useState, useEffect } from 'react';
import {
    findLatestWordDate,
    findBooksByDate,
    findLookupsByDate,
    getThumbnails
} from '#preload'
import BooksCatalog from "../../components/BooksCatalog/BooksCatalog";
import BookInfo from "../../components/BookInfoModal/BookInfoModal";



function HomePage({ }) {
    const [books, setBooks] = useState([]);
    const [selectedBookAsin, setSelectedBookAsin] = useState(null);
    const [thumbnails, setThumbnails] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleBookClick = (asin) => {
        setSelectedBookAsin(asin);
        setShowModal(true);
    };


    useEffect(() => {
        async function prepKindleData() {
            try {
                const date = await findLatestWordDate();
                const books = await findBooksByDate(date.latest_date)
                console.log(books)
                const bookId = books.map((result) => result.asin);
                const thumbnails = await getThumbnails(bookId);
                setThumbnails(thumbnails);
                setBooks(books);
            } catch (error) {
                console.error("error loading book catalog items, error:\n", error);
            }
        }
        prepKindleData();
    }, []);



    return (
        <div className="home-page">
            <div className="homepage-header">
                <h3> Your Overview: </h3>
                <div className="overview-dashboard">
                    <div className="dashboard-value">
                        <span> 38</span>
                        <h2 className="dashboard-razor" />
                        <span className="dashboard-value-title">
                            Books
                        </span>
                    </div>
                    <div className="dashboard-value">
                        <span>552</span>
                        <h2 className="dashboard-razor" />
                        <span className="dashboard-value-title">
                            Words
                        </span>
                    </div>
                    <div className="dashboard-value">
                        <span>38</span>
                        <h2 className="dashboard-razor" />
                        <span className="dashboard-value-title">
                            clippings
                        </span>
                    </div>
                </div>
            </div>
            <div className="homepage-container">

                <div className="previous-session">
                    <div className="previous-session-header">
                        <h3> Previous Session: </h3>
                    </div>
                    <div className="choose-table-buttons">
                        <h3> Books </h3> <h3> Words </h3>  <h3> Clippings </h3>
                    </div>
                    <div className="homepage-catalog">
                        <BooksCatalog
                            books={books}
                            thumbnails={thumbnails}
                            onBookClick={handleBookClick}
                        />

                        {showModal && (
                            <BookInfo
                                bookAsin={selectedBookAsin}
                                setShowModal={setShowModal}
                                thumbnail={thumbnails[selectedBookAsin]}
                            />
                        )}



                    </div>

                </div>



            </div>
        </div>
    )
}

export default HomePage;
