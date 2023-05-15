import { useState, useEffect } from "react";
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBackground from '../ModalBackground/ModalBackground';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Table from "../Table/Table";
import { format } from "../../../controller/helpers/format";
import { ReactComponent as AddTo } from "../../public/icons/addTo.svg"
import { ReactComponent as RemoveFrom } from '../../public/icons/removeFrom.svg'
import { getBookTitlesByWord } from "../../../controller/database/wordController";
import "./WordInfoModal.css";

function WordInfoModal({ word, setShowModal }) {
    const handleCloseModal = () => setShowModal(false);
    const [wordMeta, setWordMeta] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function prepWord() {
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
                        <h3>{format.ucFirst(word)}</h3>
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
