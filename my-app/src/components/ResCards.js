import { CDN_LINK } from '../utils/constants';
import './ResCards.css'

function ResCards(props){
    const {resData} = props;
    return(
        <div className="resCard">
            <img src={CDN_LINK + resData.cloudinaryImageId} alt="res-logo" className='resImage'/>
            <h2 className='resName'>{resData.name}</h2>
            <p className='cusine'>{resData.cuisines.join(", ")}</p>
            <p className='rating'>{resData.avgRating} Stars</p>
            <p className='price'>{resData.costForTwo}</p>
            <p className='time'>{resData.sla.slaString}</p>
        </div>
    );
}

export default ResCards;