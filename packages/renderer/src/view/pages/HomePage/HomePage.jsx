import './HomePage.css'
import { useState, useEffect } from 'react';
import {
    getThumbnails
} from '#preload'
import BooksCatalog from "../../components/BooksCatalog/BooksCatalog";
import BookInfo from "../../components/BookInfoModal/BookInfoModal";



import { fetchKindleBooksData } from '../../../controller/services/kindleServices';

function HomePage({ }) {
    const [books, setBooks] = useState([]);
    const [selectedBookAsin, setSelectedBookAsin] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showTable, setShowTable] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");


    const handleBookClick = (asin) => {
        setSelectedBookAsin(asin);
        setShowModal(true);
    };

    useEffect(() => {
        async function prepKindleData() {
            try {
                const kindleData = await fetchKindleBooksData(true)
                setBooks(kindleData)

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
                        <h3> Last Read: </h3>
                    </div>
                    <div className="choose-table-buttons">
                        <h3 onClick={() => { setShowTable("") }}> Books </h3> <h3 onClick={() => setShowTable('words')}> Words </h3>  <h3> Clippings </h3>
                    </div>
                    <div className="homepage-catalog">
                        {showTable == 'words'
                            ? <div>test</div>
                            : <BooksCatalog
                                books={books}
                                onBookClick={handleBookClick}
                            />
                        }

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
