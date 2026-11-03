import "./WhyChooseUs.css"
import smartSearchIcon from "url:../../assets/images/smart-search.svg"
import verifiedReviewsIcon from "url:../../assets/images/verified-reviews.svg"
import trustedPlatformIcon from "url:../../assets/images/trusted-platform.svg"


export default function WhyChooseUs() {
    return (
        <>
            <section className="why-choose-us-section">
                <div className="why-choose-us-section-head">
                    <h2>Why choose <span>HostelXplore</span>?</h2>
                    <p>We make hunting simple,transparent,and trustworthy for students and professionals.</p>
                </div>

                <div className="features-container">
                    <div className="feature-card smart-search-feature-container">
                        <img src={smartSearchIcon} alt="smart search icon" />
                        <div className="feature-card-details">
                            <h3>Smart Search</h3>
                            <p>Filter by location,price,facilities, and more to find your ideal accommodation</p>
                        </div>
                    </div>
                    <div className="feature-card verified-reviews-feature-container">
                        <img src={verifiedReviewsIcon} alt="verified reviews icon" />
                        <div className="feature-card-details">
                            <h3>Smart Search</h3>
                            <p>Filter by location,price,facilities, and more to find your ideal accommodation</p>
                        </div>
                    </div>
                    <div className="feature-card trusted-platform-feature-container">
                        <img src={trustedPlatformIcon} alt="trusted platform icon" />
                        <div className="feature-card-details">
                            <h3>Smart Search</h3>
                            <p>Filter by location,price,facilities, and more to find your ideal accommodation</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}