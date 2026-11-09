import Header from "../src/components/Header/Header"
import Hero from "./components/Hero/Hero"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import FeaturedHostels from "./components/Featured Hostels/FeaturedHostels"
import Testimonials from "./components/Testimonials/Testimonials"
export default function App(){
    return(
       <>
        <Header />
        <Hero />
        <WhyChooseUs/>
        <FeaturedHostels/>
        <Testimonials/>
       </>
    )
}