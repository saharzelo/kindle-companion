import './BookInfoModal.css';
import LookupsTable from '../LookupsTable/LookupsTable';
import myImage from './pic.jpg';
import { findLookupsByAsin, findBookByAsin } from '#preload'
import { useState, useEffect } from 'react';

function BookInfoModal({ bookAsin, setShowModal, thumbnail }) {
    const handleCloseModal = () => setShowModal(false);
    const [lookups, setLookups] = useState([]);
    const tableHeaders = ['word', 'timestamp', 'usage'];
    const [bookMetadata, setBookMetadta] = useState({})
    useEffect(() => {
        loadBookMetadata();
        loadTableData();
    }, [bookAsin]);


    const loadBookMetadata = async () => {
        const bookData = await findBookByAsin(bookAsin);
        setBookMetadta(bookData);

    };


    const loadTableData = async () => {
        const lookupData = await findLookupsByAsin(bookAsin);
        setLookups(lookupData);
    };


    return (
        <>
            <div className="book-info-modal-bg" onClick={handleCloseModal}></div>

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
                            <h3>{bookMetadata.title}</h3>
                        </div>
                        <div className="info-text">
                            <p>Author: <span className="author-name"> {bookMetadata.author} </span></p>
                            <p>Full Name: <span className="full-name">{bookMetadata.title}</span></p>
                            <p>Last synced: <span className="last-synced">WIP</span></p>
                            <p>Last Book Activity: <span className="last-highlighted">{bookMetadata.maxTime}</span></p>
                            <p>Words Defined: <span className="author-name">{bookMetadata.wordCount}</span></p>
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
                        {lookups.length > 0 ? (
                            <LookupsTable tableHeaders={tableHeaders} tableData={lookups} />
                        ) : (
                            <p>Fetching...</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookInfoModal;
