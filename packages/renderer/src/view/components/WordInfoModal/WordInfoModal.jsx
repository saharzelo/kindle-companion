import { useState, useEffect } from "react";
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBackground from '../ModalBackground/ModalBackground';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import "./WordInfoModal.css";

function WordInfoModal({ word, setShowModal }) {
    const handleCloseModal = () => setShowModal(false);
    const [wordMeta, setWordMeta] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function prepWord() {
            // call api
            setWordMeta();
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
                <ModalHeader onClick={handleCloseModal} breadcrumb={"library / " + 'temp'} />
                <div className="modal-body">BODY</div>
            </div>
        </>
    );
}

export default WordInfoModal;
