import React from 'react';
import './BookInfo.css';
import myImage from './pic.jpg';

function BookInfo({ book, showModal, setShowModal }) {
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            {showModal && (
                <>
                    <div className="book-info-modal-bg" onClick={handleCloseModal}></div>


                    <div className="modal-content">

                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                        </div>

                        <div className="modal-body">
                            <div className="book-cover">
                                <img src={myImage} />

                            </div>

                            <div className="book-thumbnail">
                                <img src={myImage} /> hello 
                            </div>

                            <div className="book-info">
                                HEllo
                            </div>

                        </div>

                        <div className="modal-footer">

                        </div>

                    </div>

                </>
            )}
        </>
    );
}

export default BookInfo