import WordsCatalog from "../../components/WordsCatalog/WordsCatalog";
import { prepLookupData } from "../../../controller/services/lookupService";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import WordInfoModal from "../../components/WordInfoModal/WordInfoModal";
import { useState, useEffect } from "react";
import "./WordsPage.css";

function WordsPage() {
    const [lookupData, setLookupData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedWord, setSelectedWord] = useState("");
    const [showWordModal, setShowWordModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const lookups = await prepLookupData()
            setLookupData(lookups)
            setLoading(false)
        }
        fetchData();
    }, []);


    const handleWordClick = (word) => {
        setSelectedWord(word);
        setShowWordModal(true);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBooks = lookupData.filter((lookup) =>
        lookup.word.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="words-page">
            <div className="catalog-header">
                <h3>Your Lookups: </h3>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>
            <WordsCatalog
                words={filteredBooks}
                onWordClick={handleWordClick}
            />

            {showWordModal && (
                <WordInfoModal
                    word={selectedWord}
                    setShowModal={setShowWordModal}
                />
            )}

        </div>
    );
}

export default WordsPage;
