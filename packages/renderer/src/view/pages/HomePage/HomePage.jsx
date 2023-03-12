import { useState } from 'react';
import './HomePage.css'


function HomePage({ profile }) {
    console.log(profile)
    const userElements = profile.map((user, index) => (
        <div key={index}>
            <h2>{user.title}</h2>
        </div>
    ));
    return (
        <div className="home-page">

        </div>
    );
}

export default HomePage;