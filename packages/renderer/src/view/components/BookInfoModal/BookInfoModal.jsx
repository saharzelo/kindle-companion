import './BookInfoModal.css';
import LookupsTable from '../LookupsTable/LookupsTable';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBackground from '../ModalBackground/ModalBackground';
import { useState, useEffect } from 'react';
import { prepBookData } from '../../../controller/services/bookServices'
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function BookInfoModal({ bookAsin, setShowModal, thumbnail }) {
    const handleCloseModal = () => setShowModal(false);
    const [bookData, setBookMetadta] = useState({ meta: {}, lookups: [] })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function prepBook() {
            const bookData = await prepBookData(bookAsin)
            setBookMetadta(bookData)
            setLoading(false)
        }
        prepBook()
    }, [bookAsin]);

    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <>
            <ModalBackground onClick={handleCloseModal}/>
            <div className="modal-content">
                <ModalHeader onClick={handleCloseModal} breadcrumb={"Library / " + bookData.meta.title}/>
                <div className="modal-body">
                    <div className="book-cover">
                        <img id="cover-img" src={thumbnail} />
                        <img id="thumb-img" src={thumbnail} />
                    </div>

                    <div className="book-thumbnail">
                    </div>
                    <div className="info-box">

                        <div className="book-title">
                            <h3>{bookData.meta.title}</h3>
                        </div>

                        <div className="info-text">
                            <p>Author: <span className="author-name"> {bookData.meta.author} </span></p>
                            <p>Full Name: <span className="full-name">{bookData.meta.title}</span></p>
                            <p>Last synced: <span className="last-synced">WIP</span></p>
                            <p>Last Book Activity: <span className="last-highlighted">{bookData.meta.maxTime}</span></p>
                            <p>Words Defined: <span className="author-name">{bookData.meta.wordCount}</span></p>
                            <p>Clippings: <span className="full-name">WIP</span></p>
                            <p>Highlights: <span className="last-synced">WIP</span></p>
                        </div>

                        <div className="razor-wrapper">
                            <h2 className="razor" />
                        </div>

                    </div>
                    <div className="book-table">
                        <div className="table-toolbar">
                            <h3> Words </h3> <h3> Clippings </h3>
                        </div>
                        <LookupsTable tableHeaders={['Word', 'usage', 'timestamp', 'stem', 'action']} tableData={bookData.lookups} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default BookInfoModal;
