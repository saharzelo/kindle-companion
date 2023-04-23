import { useState, useEffect } from "react";
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBackground from '../ModalBackground/ModalBackground';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Table from "../Table/Table";
import { format } from "../../../controller/helpers/format";
import { ReactComponent as AddTo } from '../../../public/icons/WordModal/addTo.svg'
import { ReactComponent as RemoveFrom } from '../../../public/icons/WordModal/removeFrom.svg'
import { getBookTitlesByWord } from "../../../controller/database/wordController";
import "./WordInfoModal.css";

function WordInfoModal({ word, setShowModal }) {
    const handleCloseModal = () => setShowModal(false);
    const [wordMeta, setWordMeta] = useState();
    const [loading, setLoading] = useState(true);

    const bookList = [
        { bookTitle: "The Catcher in the Rye", wordUsage: "Her incandescent smile lit up the room.", date: "2022-01-15" },
        { bookTitle: "To Kill a Mockingbird", wordUsage: "Winning the championship brought a euphoria that he had never felt before.", date: "2021-11-27" },
        { bookTitle: "1984", wordUsage: "The beauty of the sunset was ineffable, beyond words.", date: "2023-05-01" },
        { bookTitle: "Pride and Prejudice", wordUsage: "Elizabeth's perspicacity allowed her to see through Mr. Darcy's haughty facade.", date: "2022-09-10" },
        { bookTitle: "The Great Gatsby", wordUsage: "The party was ephemeral, lasting only a few hours, but it left a lasting impression on those who attended.", date: "2023-03-18" },
        { bookTitle: "One Hundred Years of Solitude", wordUsage: "The magic of Macondo was ubiquitous, permeating every aspect of daily life.", date: "2021-12-31" },
        { bookTitle: "Crime and Punishment", wordUsage: "He felt a quintessential sense of guilt, knowing that he had done something wrong.", date: "2022-06-07" },
        { bookTitle: "Beloved", wordUsage: "Their meeting was serendipitous, a chance encounter that changed both of their lives forever.", date: "2023-01-22" },
        { bookTitle: "Moby-Dick", wordUsage: "Captain Ahab's supercilious attitude towards his crew eventually led to his downfall.", date: "2022-04-14" },
        { bookTitle: "The Adventures of Huckleberry Finn", wordUsage: "The realism of Twain's writing created a verisimilitude that made readers feel like they were there.", date: "2023-02-09" }
      ];

    useEffect(() => {
        async function prepWord() {
            console.log('papi', await getBookTitlesByWord(word))
            const wordMeta = await getBookTitlesByWord(word)
            setWordMeta(wordMeta);
            setLoading(false);
        }
        prepWord();
    }, [word]);

    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <>
            <ModalBackground onClick={handleCloseModal} />
            <div className="word-modal-content">
                <ModalHeader onClick={handleCloseModal} breadcrumb={"Lookups / " + format.ucFirst(word)} />
                <div className="word-modal-body">
                    <div className="header">
                        <h3>{word}</h3>
                        <div className="button-group"> <AddTo /> <RemoveFrom /></div>
                    </div>
                    <div className="body">

                        <div className="word-info">
                            <p>Last Appeard On: <span className="last-appeared"> Anna Karenina</span></p>
                            <p>Last Appeared at: <span className="last-appeared"> 12/05/2023</span></p>
                            <p>Appeared: <span className="Appeared">15 times</span></p>
                        </div>
                        <h4> {format.ucFirst(word)} Appeared on:</h4>

                        <div className="word-table">
                            <Table tableData={wordMeta} tableHeaders={['Book', 'Usage', 'Date']} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default WordInfoModal;
