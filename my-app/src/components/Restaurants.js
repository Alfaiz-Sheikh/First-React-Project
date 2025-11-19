import './Restaurants.css';
import ResCards from './ResCards';
import ResList from '../utils/ResList'

function Restaurants() {
    return (
        <section id="restaurants">
            <div className="restaurant-sec">
                {
                    ResList.map((restaurant) => (
                        <ResCards key={restaurant.card.card.info.id} resData={restaurant.card.card.info} />
                    ))
                }
            </div>
        </section>
    );
}

export default Restaurants;