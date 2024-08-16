import AboutUs from "../Aboutus/AboutUs";
import Chart from "../Chart/Chart";
import HeroSection from "../header/HeroSection";
import InformationCatagory from "../InformationCatagory/InformationCatagory";
import Map from "../Map/Map";
import QuickAccess from "../QuickAccess/QuickAccess";
import Video from "../Video/Video";

const Home = () => {
    return (
        <div >
             <HeroSection />
            <InformationCatagory />
            <Chart />
            <QuickAccess />
            <Video />
            <AboutUs />
            <Map /> 
            
        </div>
    );
};

export default Home;