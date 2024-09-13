import { FaRegHeart } from "react-icons/fa"

export const Card = () => {
    return (
        <div className="card">
            <div className="imgIcon">
                <img src="/house.jpg" alt="Image" />
                <button className="fav">
                    <FaRegHeart size={30}/>
                </button>
            </div>
            <div className="card-content">
                <div className="new-listing">New - 6 hours ago</div>
                <div className="price">$349,000</div>
                <div className="details">2 bed &bull; 2 bath &bull; 1100 sqft</div>
                <div className="address">910 Tilden St Apt 5<br />Richmond, VA 23221</div>
            </div>
        </div>
    );
};
