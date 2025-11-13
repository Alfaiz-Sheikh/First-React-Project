import './Restaurants.css';

function ResCards({resImage, resName, cusine, price, time}){
    return(
        <div className="resCard">
            <img src={resImage} alt="res-logo" className='resImage'/>
            <h2 className='resName'>{resName}</h2>
            <p className='cusine'>{cusine}</p>
            <p className='price'>{price}</p>
            <p className='time'>{time}</p>
        </div>
    );
}

function Restaurants() {
    return (
        <section id="restaurants">
            <div className="restaurant-sec">
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/9/18602729/736605e7303c4b2d333add9e5bab9a1c_o2_featured_v2.jpg?output-format=webp"
                resName="Mahadev Restaurant"
                cusine="North Indian, Chinese, Str..."
                price="Rs.150 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/chains/8/1400208/cb8ad5f90f76f566e5f10165b983b3b6_o2_featured_v2.jpg?output-format=webp"
                resName="Apna Sweets"
                cusine="North Indian, Chinese, Str..."
                price="Rs.150 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/3/18675443/f5f22d66b18d70bb5a1a0b99700c81e9_o2_featured_v2.jpg?output-format=webp"
                resName="Sagar Gaire"
                cusine="South Indian, North Indian, ..."
                price="Rs.200 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/4/1401774/2a221b9e49081b582bf582ae7181a191_o2_featured_v2.jpg?output-format=webp"
                resName="Banana Leaf"
                cusine="South Indian, North Indian, ..."
                price="Rs.350 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/2/1400382/b9306151cb2c443b6643db027283d3bb_o2_featured_v2.jpg?output-format=webp"
                resName="GuruKripa Restaurant"
                cusine="North Indian, Chinese, Str..."
                price="Rs.450 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/6/1400056/e1850fb6679c02b304c3f5cc526af665_o2_featured_v2.jpg?output-format=webp"
                resName="Nafees Restaurant"
                cusine="North Indian, Mughlai, Chi..."
                price="Rs.400 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/0/20924950/3948585c87835b28768236d4bdf7d23a_o2_featured_v2.jpg?output-format=webp"
                resName="Thali Company"
                cusine="North Indian, Chinese, Str..."
                price="Rs.150 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/3/21403483/32c878640f19723647a096ea58504bc8_o2_featured_v2.jpg?output-format=webp"
                resName="Soul"
                cusine="Mexican, Pasta, Continental"
                price="Rs.350 for one"
                time="13min"
                />
                <ResCards resImage="https://b.zmtcdn.com/data/pictures/7/21194077/526de121af9bd0027cb547724557334e_o2_featured_v2.jpg?output-format=webp"
                resName="99 Parathas"
                cusine="North Indian, Chinese, Str..."
                price="Rs.100 for one"
                time="13min"
                />
            </div>
        </section>
    );
}

export default Restaurants;