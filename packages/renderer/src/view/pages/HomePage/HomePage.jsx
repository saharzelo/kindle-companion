import './HomePage.css'
import { useState, useEffect } from 'react';
import BooksCatalog from "../../components/BooksCatalog/BooksCatalog";
import BookInfoModal from "../../components/BookInfoModal/BookInfoModal";
import WordsCatalog from "../../components/WordsCatalog/WordsCatalog"
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { prepKindleData, prepKindleMetadata } from '../../../controller/services/kindleServices';
import { getRecentLookups } from '../../../controller/database/lookupController';

function HomePage({ }) {
    const [kindleData, setKindleData] = useState([]);
    const [kindleMeta, setKindleMeta] = useState();
    const [selectedBookAsin, setSelectedBookAsin] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showTable, setShowTable] = useState('books');
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchData() {
            const [kindleData, kindleMeta] = await Promise.all([
                prepKindleData(true),
                prepKindleMetadata()
            ]);
            setKindleData(kindleData);
            setKindleMeta(kindleMeta);
            setLoading(false);

        }
        fetchData();
    }, []);



    const handleBookClick = (asin) => {
        setSelectedBookAsin(asin);
        setShowModal(true);
    };


    const handleTableClick = async (table) => {
        const lookups = await getRecentLookups()
        console.log('papi', lookups)
        setShowTable(table)
    };

    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <div className="home-page">
            <div className="homepage-header">
                <h3> Your Overview: </h3>
                <div className="overview-dashboard">
                    <div className="dashboard-value">
                        <span> {kindleMeta.bookCount}</span>
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
                        <h3 onClick={() => { handleTableClick("books") }}> Books </h3> <h3 onClick={() => handleTableClick("words")}> Words </h3>  <h3> Clippings </h3>
                    </div>
                    <div className="homepage-catalog">
                        {showTable == 'books' && <BooksCatalog books={kindleData} onBookClick={handleBookClick} />}
                        {showTable == 'words' && <WordsCatalog />}


                        {showModal && (
                            <BookInfoModal
                                bookAsin={selectedBookAsin}
                                setShowModal={setShowModal}
                                thumbnail={kindleData.find((dict) => dict.asin == selectedBookAsin)?.thumbnail}
                            />
                        )}
                    </div>
                </div>






            </div>

        </div>
    )
}

export default HomePage;
