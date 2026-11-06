import "./FeaturedHostels.css"
import rightArrowIcon from "url:../../assets/images/right-arrow.svg"
import roomImage from "url:../../assets/images/Cozy Modern Bedroom Retreat.png"
import locationIcon from "url:../../assets/images/location-icon.svg"
export default function FeaturedHostels() {
    return (
        <>
            <section className="featured-hostels-section">
                <div className="featured-hostels-head">
                    <div className="featured-hostels-head-details">
                        <h2>Featured Hostels</h2>
                        <p>Hand-picked accommodations with excellent ratings and facilities</p>
                    </div>

                    <button type="button" className="view-all-btn">View All <img src={rightArrowIcon} alt="right arrow icon" /></button>
                </div>

                <div className="hostels-cards-container">
                    <div className="hostel-card">
                        <div className="room-image-container">
                            <p><span>⭐</span>4.8 <span className="no-of-reviews">(120)</span></p>
                            <img src={roomImage} alt="room image" />
                        </div>
                        <div className="hostel-card-details">
                            <h3>Urban Nest Living</h3>
                            <p className="hostel-location-details"><img src={locationIcon} alt="location icon" /> Madhapur,Hyderabad</p>

                            <p className="min-price-per-month">
                                <span className="price">₹8,500</span> / month
                            </p>
                            <div className="facilities-container">
                                <p className="facility">Double Sharing</p>
                                <p className="facility">Meals</p>
                                <p className="facility">Wi-Fi</p>
                            </div>

                            <div className="hostel-card-btns-container">
                                <button className="hostel-card-btn view-details-btn">View Details</button>
                                <button className="hostel-card-btn book-now-btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="hostel-card">
                        <div className="room-image-container">
                            <p><span>⭐</span>4.8 <span className="no-of-reviews">(120)</span></p>
                            <img src={roomImage} alt="room image" />
                        </div>
                        <div className="hostel-card-details">
                            <h3>Urban Nest Living</h3>
                            <p className="hostel-location-details"><img src={locationIcon} alt="location icon" /> Madhapur,Hyderabad</p>

                            <p className="min-price-per-month">
                                <span className="price">₹8,500</span> / month
                            </p>
                            <div className="facilities-container">
                                <p className="facility">Double Sharing</p>
                                <p className="facility">Meals</p>
                                <p className="facility">Wi-Fi</p>
                            </div>

                            <div className="hostel-card-btns-container">
                                <button className="hostel-card-btn view-details-btn">View Details</button>
                                <button className="hostel-card-btn book-now-btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="hostel-card">
                        <div className="room-image-container">
                            <p><span>⭐</span>4.8 <span className="no-of-reviews">(120)</span></p>
                            <img src={roomImage} alt="room image" />
                        </div>
                        <div className="hostel-card-details">
                            <h3>Urban Nest Living</h3>
                            <p className="hostel-location-details"><img src={locationIcon} alt="location icon" /> Madhapur,Hyderabad</p>

                            <p className="min-price-per-month">
                                <span className="price">₹8,500</span> / month
                            </p>
                            <div className="facilities-container">
                                <p className="facility">Double Sharing</p>
                                <p className="facility">Meals</p>
                                <p className="facility">Wi-Fi</p>
                            </div>

                            <div className="hostel-card-btns-container">
                                <button className="hostel-card-btn view-details-btn">View Details</button>
                                <button className="hostel-card-btn book-now-btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="hostel-card">
                        <div className="room-image-container">
                            <p><span>⭐</span>4.8 <span className="no-of-reviews">(120)</span></p>
                            <img src={roomImage} alt="room image" />
                        </div>
                        <div className="hostel-card-details">
                            <h3>Urban Nest Living</h3>
                            <p className="hostel-location-details"><img src={locationIcon} alt="location icon" /> Madhapur,Hyderabad</p>

                            <p className="min-price-per-month">
                                <span className="price">₹8,500</span> / month
                            </p>
                            <div className="facilities-container">
                                <p className="facility">Double Sharing</p>
                                <p className="facility">Meals</p>
                                <p className="facility">Wi-Fi</p>
                            </div>

                            <div className="hostel-card-btns-container">
                                <button className="hostel-card-btn view-details-btn">View Details</button>
                                <button className="hostel-card-btn book-now-btn">Book Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}