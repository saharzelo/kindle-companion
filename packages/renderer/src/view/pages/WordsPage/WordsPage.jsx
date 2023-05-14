import WordsCatalog from "../../components/WordsCatalog/WordsCatalog";
import { useState, useEffect } from "react";
import "./WordsPage.css";

function WordsPage() {
    const [wordsData, setWordsData] = useState();

    useEffect(() => {
        async function fetchData() {
            setWordsData()
        }
        fetchData();
    }, []);
                       

    return (
        <div className="words-page">
            <div className="catalog-header">
                <h3>Your Lookups: </h3>
                <input
                    type="text"
                    placeholder="Search..."
                    // value={searchQuery}
                    // onChange={handleSearchInputChange}
                />
            </div>

        </div>
    );
}

export default WordsPage;
