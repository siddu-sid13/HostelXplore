
import homeIcon from "url:../assets/images/home-icon.png"
import signInIcon from "url:../assets/images/sign-in.svg"
import menuIcon from "url:../assets/images/hamburger-menu.svg"
import closeIcon from "url:../assets/images/close-icon.svg"
import addUserIcon from "url:../assets/images/add-user.png"
import navHomeIcon from "url:../assets/images/home-icon-for-nav-item.svg"
import addIcon from "url:../assets/images/add-icon.svg"
import searchIcon from "url:../assets/images/search-icon.svg"
import supportIcon from "url:../assets/images/support-icon.svg"
// import "../styles.css"
export default function Header() {
    console.log(homeIcon)
    return (
        <header>
            <nav>
                <div className="nav-bar">
                    <div className="logo">
                        <img src={homeIcon} alt="home-icon" />
                        <h3 className="logo-name"><span className="logo-first-half">Hostel</span><span className="logo-second-half">Xplore</span></h3>
                    </div>
                    <div className="nav-items">
                        <a href="#">Home</a>
                        <a href="#">Find Hostels</a>
                        <a href="#">List Your Hostel</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="nav-buttons-container">
                        <button className="sign-in-btn nav-btn" type="button">
                            <img src={signInIcon} alt="sign in icon" />
                            <span>Sign In</span>
                        </button>
                        <button className="sign-up-btn nav-btn" type="button">
                            <img src={addUserIcon} alt="add user" />
                            <span>Sign Up</span>
                        </button>

                    </div>

                    <img className="menu-icon" src={menuIcon} alt="menu icon" />
                </div>
                <div className="nav-bar slidebar">
                    <div className="logo-container">
                        <div className="logo">
                            <img className="home-icon" src={homeIcon} alt="home-icon" />
                        <h3 className="logo-name"><span className="logo-first-half">Hostel</span><span className="logo-second-half">Xplore</span></h3>
                        </div>
                        
                        <img className="close-icon" src={closeIcon} alt="close icon" />
                    </div>
                    <div className="nav-items">
                        <a href="#"><img className="nav-icon" src={navHomeIcon} alt="nav item home icon" />Home</a>
                        <a href="#"><img className="nav-icon" src={searchIcon} alt="search icon" />Find Hostels</a>
                        <a href="#"><img className="nav-icon" src={addIcon} alt="add icon" />List Your Hostel</a>
                        <a href="#"><img className="nav-icon" src={supportIcon} alt="support icon" />Support</a>
                    </div>
                    <div className="line-break"></div>
                    <div className="nav-buttons-container">
                        <button className="sign-in-btn nav-btn" type="button">
                            <img src={signInIcon} alt="sign in icon" />
                            <span>Sign In</span>
                        </button>
                        <button className="sign-up-btn nav-btn" type="button">
                            <img src={addUserIcon} alt="add user" />
                            <span>Sign Up</span>
                        </button>

                    </div>
                </div>
            </nav>

        </header>
    )
}