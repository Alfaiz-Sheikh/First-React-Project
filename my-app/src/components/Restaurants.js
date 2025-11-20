import './Restaurants.css';
import ResCards from './ResCards';
import ResList from '../utils/ResList';
import {useState} from "react";

function Restaurants() {
    let [listOfRes, setlistOfRes] = useState([{
            "card":{
                "card":{
                    "info":{
                        "id": "919025",
                        "name": "Burger King",
                        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                        "locality": "Bhawarkuan main Road",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹200 for two",
                        "sla":{
                            "slaString": "25-30 mins",
                        },
                        "cuisines": [
                            "Burgers",
                            "American"
                        ],
                        "avgRating": 4.2
                    }
                }
            }
        },
        {
            "card":{
                "card":{
                    "info":{
                        "id": "919026",
                        "name": "KFC",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/29/071f2477-3ad8-4d31-8213-5f85f0f51a88_1248863.jpg",
                        "locality": "Bhawarkuan main Road",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹200 for two",
                        "sla":{
                            "slaString": "25-30 mins",
                        },
                        "cuisines": [
                            "Burgers",
                            "American"
                        ],
                        "avgRating": 3.8
                    }
                }
            }
        },
        {
            "card":{
                "card":{
                    "info":{
                        "id": "919027",
                        "name": "Dominos",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/833443f7-fa3c-43c0-b23a-7677ed1a666f_65267.JPG",
                        "locality": "Bhawarkuan main Road",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹200 for two",
                        "sla":{
                            "slaString": "25-30 mins",
                        },
                        "cuisines": [
                            "Burgers",
                            "American"
                        ],
                        "avgRating": 4.5
                    }
                }
            }
        },
        {
            "card":{
                "card":{
                    "info":{
                        "id": "919025",
                        "name": "Burger Singh",
                        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/11/e04f7bad-a838-46b3-bf3d-ed0d9c5e3362_49630aa3-21c2-4dc7-bad8-955676302af2.jpg",
                        "locality": "Bhawarkuan main Road",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹200 for two",
                        "sla":{
                            "slaString": "25-30 mins",
                        },
                        "cuisines": [
                            "Burgers",
                            "American"
                        ],
                        "avgRating": 4
                    }
                }
            }
        }]);

    return (
       <div className="body">
        <div className="filter">
            <button className='filter-btn' onClick={() => {
                const updatedList = listOfRes.filter(
                    (res) => 
                        res.card.card.info.avgRating > 4
                );
                setlistOfRes(updatedList);
            }}>&#128269; Top Rated Restaurants</button>
        </div>
         <section id="restaurants">
            <div className="restaurant-sec">
                {
                    listOfRes.map((restaurant) => (
                        <ResCards key={restaurant.card.card.info.id} resData={restaurant.card.card.info} />
                    ))
                }
            </div>
        </section>
       </div>
    );
}

export default Restaurants;