import React from 'react';
import './BookInfo.css';

function BookInfo({ book, showModal, setShowModal }) {
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            {showModal && (
                <>
                    <div className="book-info-modal-bg" onClick={handleCloseModal}></div>
                        <div className="modal-content">
                            <div className="modal-toolbar">
                                <span className="close" onClick={handleCloseModal}>&times;</span>
                            </div>
                            <h2>Anna</h2>
                            <img />
                            <p>Awesome</p>
                        </div>
                </>
            )}
        </>
    );
}

export default BookInfo