import { useState, useEffect } from 'react';

import './HomePage.css'


function HomePage({ profile }) {
    // const userElements = profile.map((user, index) => (
    //     <div key={index}>
    //         <h2>{user.title}</h2>
    //     </div>
    // ));
    const [data, setData] = useState([]);
    const testing = async () => {}
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await testing();
                const userElements = result[0].map((user, index) => (
                    <div key={index}>
                        <h2>{user.title}</h2>
                    </div>
                ));
                setData(userElements);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="home-page">
            {data}
        </div>
    );
}

export default HomePage;