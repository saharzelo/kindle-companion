import './BookInfoModal.css';
import LookupsTable from '../LookupsTable/LookupsTable';
import myImage from './pic.jpg';
import { useState, useEffect } from 'react';
import { prepBookData } from '../../../controller/services/bookServices'


function BookInfoModal({ bookAsin, setShowModal, thumbnail }) {
    const handleCloseModal = () => setShowModal(false);
    const tableHeaders = ['word', 'timestamp', 'usage'];
    const [bookMetadata, setBookMetadta] = useState({ book: {}, lookups: [] })

    useEffect(() => {
        async function prepBook() {
            const bookData = await prepBookData(bookAsin)
            console.log(bookData.lookups.length)
            setBookMetadta(bookData)
        }
        prepBook()
    }, [bookAsin]);


    return (
        <>
            <div className="book-info-modal-bg" onClick={handleCloseModal}></div>
            {bookMetadata.lookups.length > 0 ? (
                <div className="modal-content">

                    <div className="modal-header">
                        <span className="breadcrumb"> Library  /  The-Road</span>
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                    </div>

                    <div className="modal-body">
                        <div className="book-cover">
                            <img id="cover-img" src={thumbnail} />
                            <img id="thumb-img" src={thumbnail} />
                        </div>

                        <div className="book-thumbnail">
                        </div>
                        <div className="info-box">

                            <div className="book-title">
                                <h3>{bookMetadata.book.title}</h3>
                            </div>

                            <div className="info-text">
                                <p>Author: <span className="author-name"> {bookMetadata.book.author} </span></p>
                                <p>Full Name: <span className="full-name">{bookMetadata.book.title}</span></p>
                                <p>Last synced: <span className="last-synced">WIP</span></p>
                                <p>Last Book Activity: <span className="last-highlighted">{bookMetadata.book.maxTime}</span></p>
                                <p>Words Defined: <span className="author-name">{bookMetadata.book.wordCount}</span></p>
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
                            {bookMetadata.lookups.length > 0 ? (
                                <LookupsTable tableHeaders={tableHeaders} tableData={bookMetadata.lookups} />
                            ) : (
                                <p>Fetching...</p>
                            )}
                        </div>
                    </div>

                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default BookInfoModal;
