import "./HomePage.css";
import { useState, useEffect } from "react";
import BooksCatalog from "../../components/BooksCatalog/BooksCatalog";
import BookInfoModal from "../../components/BookInfoModal/BookInfoModal";
import WordInfoModal from "../../components/WordInfoModal/WordInfoModal";
import WordsCatalog from "../../components/WordsCatalog/WordsCatalog";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { prepKindleMeta } from "../../../controller/services/kindleServices";
import { prepBooksData } from "../../../controller/services/bookServices"
import { prepLookupData } from "../../../controller/services/lookupService"

function HomePage({ }) {
    const [booksData, setBooksData] = useState();
    const [kindleMeta, setKindleMeta] = useState();
    const [wordsData, setWordsData] = useState();

    const [selectedWord, setSelectedWord] = useState();
    const [selectedBookAsin, setSelectedBookAsin] = useState();

    const [showWordModal, setShowWordModal] = useState();
    const [showBookModal, setShowBookModal] = useState();
    const [showTable, setShowTable] = useState("books");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const [booksData, kindleMeta, lookups ] = await Promise.all([
                prepBooksData(true),
                prepKindleMeta(),
                prepLookupData(true)
            ]);
            setBooksData(booksData);
            setKindleMeta(kindleMeta);
            setWordsData(lookups)
            setLoading(false);
        }
        fetchData();
    }, []);

    const handleWordClick = (word) => {
        setSelectedWord(word);
        setShowWordModal(true);
    };

    const handleBookClick = (asin) => {
        setSelectedBookAsin(asin);
        setShowBookModal(true);
    };

    const handleTableClick = async (table) => {
        setShowTable(table);
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
                        <span className="dashboard-value-title">Books</span>
                    </div>
                    <div className="dashboard-value">
                        <span>{kindleMeta.lookupCount}</span>
                        <h2 className="dashboard-razor" />
                        <span className="dashboard-value-title">Words</span>
                    </div>
                    <div className="dashboard-value">
                        <span>0</span>
                        <h2 className="dashboard-razor" />
                        <span className="dashboard-value-title">Clippings</span>
                    </div>
                </div>
            </div>
            <div className="homepage-container">
                <div className="previous-session">
                    <div className="previous-session-header">
                        <h3> Last Read: </h3>
                    </div>
                    <div className="choose-table-buttons">
                        <h3 onClick={() => handleTableClick("books")}>Books</h3>
                        <h3 onClick={() => handleTableClick("words")}>Words</h3>
                        <h3 onClick={() => handleTableClick("clippings")}>Clippings</h3>
                    </div>
                    <div className="homepage-catalog">
                        {showTable == "books" && (
                            <BooksCatalog
                                books={booksData}
                                onBookClick={handleBookClick}
                            />
                        )}
                        {showTable == "words" && (
                            <WordsCatalog
                                words={wordsData}
                                onWordClick={handleWordClick}
                            />
                        )}
                        {showTable == "clippings" && (
                            "WIP"
                        )}
                        {showBookModal && (
                            <BookInfoModal
                                bookAsin={selectedBookAsin}
                                setShowModal={setShowBookModal}
                                thumbnail={
                                    booksData.find((dict) => dict.asin == selectedBookAsin)?.thumbnail
                                }
                            />
                        )}
                        {showWordModal && (
                            <WordInfoModal
                                word={selectedWord}
                                setShowModal={setShowWordModal}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
