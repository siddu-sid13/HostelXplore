import "./CTA.css"
import searchIcon from "url:../../assets/images/search-icon.svg"
import bedIcon from "url:../../assets/images/bed-icon.svg"
export default function CTA(){
    return (
        <>
            <section className="cta-section">
                <div className="cta-section-content">
                    <h2>Ready to Find Your Ideal Hostel?</h2>
                <p>Join thousands of students and professional who found their perfect accommodation through HostelXplore</p>
                <div className="cta-btns-container">
                    <button className="cta-btn cta-search-btn">
                        <img src={searchIcon} alt="search icon" />

                        Start Your Search
                    </button>
                    <button className="cta-btn list-hostel-btn">
                        <img src={bedIcon} alt="bed icon" />
                        List Your Hostel
                    </button>
                </div>
                </div>
            </section>
        </>
    )
}
