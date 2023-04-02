import React from 'react';
import './BookInfo.css';
import BookInfoTable from '../BookInfoTable/BookInfoTable';
import myImage from './pic.jpg';

function BookInfo({ book, showModal, setShowModal }) {
    const handleCloseModal = () => setShowModal(false);


    const tableData = [
        {
          id: 1,
          name: "Ferris",
          date: "2023-03-30",
          usage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo elit sapien, ut tempor massa viverra vel.",
          time: "12:30 PM",
        },
        {
          id: 2,
          name: "Garfield",
          date: "2023-04-01",
          usage: "Mauris aliquet mauris quis ante consectetur, eu rhoncus velit hendrerit. Donec vitae augue nisi.",
          time: "09:45 AM",
        },
        {
          id: 3,
          name: "Simba",
          date: "2023-03-29",
          usage: "Duis eu odio risus. Sed tristique, dolor sit amet scelerisque consequat, enim purus auctor purus, vitae semper nulla eros eu tellus.",
          time: "02:15 PM",
        },
        {
          id: 4,
          name: "Salem",
          date: "2023-03-28",
          usage: "Proin sed augue pharetra, placerat eros non, bibendum mauris. Sed tristique, dolor sit amet scelerisque consequat, enim purus auctor purus, vitae semper nulla eros eu tellus.",
          time: "10:00 AM",
        },
      ];
      




    return (
        <>
            {showModal && (
                <>
                    <div className="book-info-modal-bg" onClick={handleCloseModal}></div>

                    <div className="modal-content">

                        <div className="modal-header">
                            <span className="breadcrumb"> Library  /  The-Road</span>
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                        </div>

                        <div className="modal-body">
                            <div className="book-cover">
                                <img id="cover-img" src={myImage} />
                                <img id="thumb-img" src={myImage} />
                            </div>
                            <div className="book-thumbnail">
                            </div>
                            <div className="info-box">
                                <div className="book-title">
                                    <h3>The Road</h3>
                                </div>
                                <div className="info-text">
                                    <p>Author: <span className="author-name"> Cormac Anthony </span></p>
                                    <p>Full Name: <span className="full-name">The Road</span></p>
                                    <p>Last synced: <span className="last-synced">22.05.23</span></p>
                                    <p>Last Book Activity: <span className="last-highlighted">21.05.23</span></p>
                                    <p>Words Defined: <span className="author-name">32</span></p>
                                    <p>Clippings: <span className="full-name">25</span></p>
                                    <p>Highlights: <span className="last-synced">13</span></p>
                                </div>

                                <div className="razor-wrapper">
                                    <h2 className="razor" />
                                </div>
                            </div>

                            <div className="book-table">
                                <div className="table-toolbar">
                                    <h3> Words </h3> <h3> Clippings </h3>
                                </div>
                                <BookInfoTable tableData={tableData} />

                            </div>
                        </div>


                    </div>

                </>
            )}
        </>
    );
}

export default BookInfo