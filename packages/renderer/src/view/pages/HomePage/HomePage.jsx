import './HomePage.css'


function HomePage({ }) {
    return (
        <div className="home-page">
            <div className="homepage-header">
                <h3> Your Overview: </h3>
                <div className="overview-dashboard">
                    <div className="dashboard-value">
                        <span> 38</span>

                        <h2 className="dashboard-razor" />

                        <span className="dashboard-value-title">
                            Books
                        </span>
                    </div>
                    <div className="dashboard-value">
                        <span>552</span>

                        <h2 className="dashboard-razor" />

                        <span className="dashboard-value-title">
                            Words
                        </span>
                    </div>
                    <div className="dashboard-value">
                        <span>38</span>

                        <h2 className="dashboard-razor" />

                        <span className="dashboard-value-title">
                            clippings
                        </span>
                    </div>

                </div>
            </div>
            <div className="homepage-container">

       



                <div className="previous-session">
                    <div className="previous-session-header">
                        <h3> Previous Session: </h3>
                    </div>
                    <div className="choose-table-buttons">
                            <h3> Books </h3> <h3> Words </h3>  <h3> Clippings </h3>
                        </div>




                </div>



            </div>
        </div>
    )
}

export default HomePage;
