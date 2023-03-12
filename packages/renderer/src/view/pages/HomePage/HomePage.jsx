import { useState } from 'react';
import './HomePage.css'


function HomePage({ profile }) {
    return (
        <div className="home-page">
            {profile[0].title}
        </div>
    );
}

export default HomePage;