import currencyRupee from "url:../assets/images/currency-rupee.svg"
import dropDownIcon from "url:../assets/images/drop-down.svg"
import groupIcon from "url:../assets/images/group-icon.svg"
import genderIcon from "url:../assets/images/person-check-icon.svg"
import searchIcon from "url:../assets/images/search-icon.svg"
export default function Hero() {
    return (

        <section className="hero-section">
            <div className="hero-text">
                <p>FIND YOUR NEXT HOME</p>
                <div className="hero-text-heading">
                    <h1>Find Your Perfect</h1>
                    <h1>Hostel & PG</h1>
                </div>
                <p>Explore verified hostels near your college or workplace.Compare prices,facilities,and reviews - all in one place.</p>
            </div>

            <div className="search-hostels-container">
                <div className="search-input-container">
                    <input className="search-input" type="text" placeholder="Search by city,area, or hostel name..." />
                </div>
                <div className="dropdown-menu-container price-range-container">
                    <div className="dropdown-name-and-icon-container">
                        <img src={currencyRupee} alt="currency rupee" />
                        <p>Price Range</p>
                    </div>
                    <img src={dropDownIcon} alt="drop down icon" />
                </div>
                <div className="dropdown-menu-container room-sharing-container">
                    <div className="dropdown-name-and-icon-container">
                        <img src={groupIcon} alt="currency rupee" />
                        <p>Room Sharing</p>
                    </div>
                    <img src={dropDownIcon} alt="drop down icon" />
                </div>

                <div className="dropdown-menu-container gender-container">
                    <div className="dropdown-name-and-icon-container">
                        <img src={genderIcon} alt="currency rupee" />
                        <p>Gender</p>
                    </div>
                    <img src={dropDownIcon} alt="drop down icon" />
                </div>
                <div className="search-btn-container">

                    <button className="search-btn"><img src={searchIcon} alt="search-icon" className="search-icon-white" /> Search Hostels</button>
                </div>
            </div>
        </section>
    )
}