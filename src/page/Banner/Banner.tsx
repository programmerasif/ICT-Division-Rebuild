import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackgroundBeams } from "@/components/ui/background-beams";

import "./header.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};
const Banner = () => {
  return (
    <div className="carousel-wrapper">
      <div className=" overflow-x-hidden">
        <Slider {...settings}>
          <div className="overflow-hidden">
            <div className=" w-full rounded-md background-gradient-image relative flex gap-4 flex-col items-center justify-center antialiased">
              <div className="max-w-7xl mx-auto p-4 flex justify-center items-center flex-col gap-5">
                <h1 className="relative z-10 text-lg md:text-4xl text-gray-50  text-center font-bold">
                  Welcome To ICT Division Government of the People's Republic of
                  Bangladesh
                </h1>

                <button className="bg-[#4CAF50] max-w-lg mx-auto my-2  px-8  py-2 font-semibold text-gray-50 text-center rounded-md">
                  Get Start
                </button>
              </div>
              <BackgroundBeams />
            </div>
          </div>
          <div>
            <div className=" w-full rounded-md background-gradient-image relative flex gap-4 flex-col items-center justify-center antialiased">
              <div className="max-w-7xl mx-auto p-4 flex justify-center items-center flex-col gap-5">
                <h1 className="relative z-10 text-lg md:text-4xl text-gray-50  text-center font-bold">
                  Welcome To ICT Division Government of the People's Republic of
                  Bangladesh
                </h1>

                <button className="bg-[#4CAF50] max-w-lg mx-auto my-2  px-8  py-2 font-semibold text-gray-50 text-center rounded-md">
                  Get Start
                </button>
              </div>
              <BackgroundBeams />
            </div>
          </div>
          <div>
            <div className=" w-full rounded-md background-gradient-image relative flex gap-4 flex-col items-center justify-center antialiased">
              <div className="max-w-7xl mx-auto p-4 flex justify-center items-center flex-col gap-5">
                <h1 className="relative z-10 text-lg md:text-4xl text-gray-50  text-center font-bold">
                  Welcome To ICT Division Government of the People's Republic of
                  Bangladesh
                </h1>

                <button className="bg-[#4CAF50] max-w-lg mx-auto my-2  px-8  py-2 font-semibold text-gray-50 text-center rounded-md">
                  Get Start
                </button>
              </div>
              <BackgroundBeams />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
