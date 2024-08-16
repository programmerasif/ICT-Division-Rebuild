import AboutUs from "../Aboutus/AboutUs";
import HeroSection from "../header/HeroSection";
import InformationCatagory from "../InformationCatagory/InformationCatagory";
import Map from "../Map/Map";
import Video from "../Video/Video";

const Home = () => {
    return (
        <div >
            <HeroSection />
            <AboutUs />
            <InformationCatagory />
            <Video />
            <Map />
        </div>
    );
};

export default Home;