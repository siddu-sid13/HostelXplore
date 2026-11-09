import "./Testimonials.css"
import testimonialIcon from "url:../../assets/images/testimonial-quote.svg"
import testimonialStar from "url:../../assets/images/testimonial-star.svg"
import profileImage1 from "url:../../assets/images/profile 1.png"
import profileImage2 from "url:../../assets/images/profile 2.png"
export default function Testimonials(){
    return(
        <>
            <section className="testimonials-section">
                <div className="testimonials-section-head">
                    <h2>What Our Users Say</h2>
                    <p>Real experiences from students and professionals who found their perfect stay with HostelXplore.</p>
                </div>

                <div className="testimonials-cards-container">
                    <div className="testimonial-card">
                        <img className="testimonial-icon" src={testimonialIcon} alt="testimonial-icon" />
                        <p className="testimonial-review">"HostelXplore made my hostel search so easy! I found a clean,affordable,and safe hostel near my college within a day."</p>
                        <div className="reviews-stars-container">
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                        </div>

                        <div className="profile-container">
                            <img src={profileImage1} alt="Shravani" className="profile-image" />
                            <div className="profile-information">
                                <h3 className="profile-name">Shravani</h3>
                                <p>B.Tech Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <img className="testimonial-icon" src={testimonialIcon} alt="testimonial-icon" />
                        <p className="testimonial-review">"HostelXplore made my hostel search so easy! I found a clean,affordable,and safe hostel near my college within a day."</p>
                        <div className="reviews-stars-container">
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                        </div>

                        <div className="profile-container">
                            <img src={profileImage1} alt="Shravani" className="profile-image" />
                            <div className="profile-information">
                                <h3 className="profile-name">Shravani</h3>
                                <p>B.Tech Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <img className="testimonial-icon" src={testimonialIcon} alt="testimonial-icon" />
                        <p className="testimonial-review">"HostelXplore made my hostel search so easy! I found a clean,affordable,and safe hostel near my college within a day."</p>
                        <div className="reviews-stars-container">
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                            <img src={testimonialStar} alt="testimonial star" />
                        </div>

                        <div className="profile-container">
                            <img src={profileImage1} alt="Shravani" className="profile-image" />
                            <div className="profile-information">
                                <h3 className="profile-name">Shravani</h3>
                                <p>B.Tech Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}