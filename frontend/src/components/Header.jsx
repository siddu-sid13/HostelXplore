
import homeIcon from "url:../assets/images/home-icon.png"
import signInIcon from "url:../assets/images/sign-in.svg"
// import "../styles.css"
export default function Header(){
    console.log(homeIcon)
    return(
        <header>
            <nav>
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
                        <span>Sign Up</span>
                    </button>

                </div>
            </nav>
        </header>
    )
}