import { useEffect } from "react"
import "./footer.css"
import homeIcon from "url:../../assets/images/home-icon-for-nav-item.svg"
import instagramIcon from "url:../../assets/images/instagram.svg"
import youtubeIcon from "url:../../assets/images/youtube.svg"
import twitterIcon from "url:../../assets/images/x-twitter.svg"
import linkedInIcon from "url:../../assets/images/linkedin.svg"

export default function Footer() {
    useEffect(() => {
        const accordions = document.querySelectorAll(".footer-accordion");

        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const updateAccordion = () => {
            accordions.forEach((accordion) => {
                accordion.open = mediaQuery.matches;
            });
        };

        updateAccordion();

        mediaQuery.addEventListener("change", updateAccordion);

        return () => {
            mediaQuery.removeEventListener("change", updateAccordion);
        };
    }, []);

    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer_col--brand">
                        <div className="logo--footer">
                            <img src={homeIcon} alt="home-icon" />
                            <h3 className="logo-name--footer"><span className="logo-first-half--footer">Hostel</span><span className="logo-second-half--footer">Xplore</span></h3>
                        </div>
                        <p className="footer__col-text">Your trusted platform for finding perfect hostels and PGs across India.</p>
                        <div className="social-media-links">
                            <a href="#"><img src={instagramIcon} alt="instagram icon" /></a>
                            <a href="#"><img src={youtubeIcon} alt="youtube icon" /></a>
                            <a href="#"><img src={twitterIcon} alt="twitter icon" /></a>
                            <a href="#"><img src={linkedInIcon} alt="linkedIn icon" /></a>
                        </div>


                    </div>

                    {/* Students Accordion */}
                    <details className="footer-accordion footer__col--students">
                        <summary className="footer__col-title">
                            <span>For Students</span>
                            <span className="accordion-arrow"></span>
                        </summary>

                        <ul className="footer__list">
                            <li><a href="#">Find Hostels</a></li>
                            <li><a href="#">Compare Stays</a></li>
                            <li><a href="#">Read Reviews</a></li>
                            <li><a href="#">Student Support</a></li>
                        </ul>
                    </details>

                    {/* Owners Accordion */}
                    <details className="footer-accordion footer__col--owners">
                        <summary className="footer__col-title">
                            <span>For Owners</span>
                            <span className="accordion-arrow"></span>
                        </summary>

                        <ul className="footer__list">
                            <li><a href="#">List Your Hostel</a></li>
                            <li><a href="#">Manage Bookings</a></li>
                            <li><a href="#">Owner Dashboard</a></li>
                            <li><a href="#">Pricing & Plans</a></li>
                        </ul>
                    </details>

                    {/* Support Accordion */}
                    <details className="footer-accordion footer__col--support">
                        <summary className="footer__col-title">
                            <span>Support</span>
                            <span className="accordion-arrow"></span>
                        </summary>

                        <ul className="footer__list">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Report an Issue</a></li>
                        </ul>
                    </details>




                    <div className="footer__col--subscribe">
                        <div>

                            <h3 className="footer__col-title">Subscribe for Updates</h3>
                            <p className="footer__col-text">Get hostel deals, new listings,and student tips in your box.</p>
                        </div>

                        <form className="footer__form">

                            <div className="footer__input-container">
                                <input required type="email" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Please enter a valid email address (e.g., name@example.com)" />
                                <button className="subscribe-btn--footer" type="submit">Subscribe</button>
                            </div>

                        </form>
                    </div>

                </div>
                <div className="line-break--footer"></div>

                <div className="footer-bottom">
                    <p className="copyright">© 2024 HostelXplore. All rights reserved.</p>

                    <ul className="footer-bottom-links">
                        <li className="footer-bottom-link-item"><a href="#">Privacy Policy</a></li>
                        <span>|</span>
                        <li className="footer-bottom-link-item"><a href="#">Terms of Service</a></li>
                        <span>|</span>
                        <li className="footer-bottom-link-item"><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}