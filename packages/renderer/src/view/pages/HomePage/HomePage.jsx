import './HomePage.css'
import { findByAsin } from '#preload'


function HomePage({ }) {
    const t = async () => {
        console.log(await findByAsin('B07BK9RL3W'))
    }
    t()
    return (
        <div className="home-page">
            <div className="catalog-header">
                <h3> Your Overview: </h3>
            </div>

        </div>
    )
}

export default HomePage;
