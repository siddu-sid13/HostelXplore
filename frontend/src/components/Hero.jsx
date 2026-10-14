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
            </div>
        </section>
    )
}