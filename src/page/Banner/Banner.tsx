import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackgroundBeams } from "@/components/ui/background-beams";

import "./header.css";
import Marquee from "react-fast-marquee";

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
    <div className="carousel-wrapper relative">
      <div className=" overflow-x-hidden">
        <Slider {...settings}>
          <div className="overflow-hidden">

          <div className=" w-full rounded-md background-gradient-image relative flex gap-4 flex-col items-center justify-center antialiased">
          <div className=" mx-auto p-4 flex justify-center items-center flex-col gap-5">
          <h1 className="relative max-w-7xl  z-10 text-lg md:text-4xl text-gray-50  text-center font-bold">
                  Welcome To ICT Division Government of the People's Republic of
                  Bangladesh
                </h1>

                <button className="bg-[#4CAF50] max-w-lg mx-auto my-1 md:my-2 px-5 md:px-8 py-1 md:py-2 md:font-semibold text-gray-50 text-center rounded-md">
                  Get Start
                </button>
              </div>
              <BackgroundBeams />
            </div>


          </div>
          <div className="overflow-hidden">

          <div className=" w-full rounded-md background-gradient-image-two relative flex gap-4 flex-col items-center justify-center antialiased">
          <div className=" mx-auto p-4 flex justify-center items-center flex-col gap-5">
          <h1 className="relative max-w-7xl  z-10 text-lg md:text-4xl text-gray-50  text-center font-bold">
                  Welcome To ICT Division Government of the People's Republic of
                  Bangladesh
                </h1>

                <button className="bg-[#4CAF50] max-w-lg mx-auto my-1 md:my-2 px-5 md:px-8 py-1 md:py-2 md:font-semibold text-gray-50 text-center rounded-md">
                  Get Start
                </button>
              </div>
              <BackgroundBeams />
            </div>


          </div>
          <div className="overflow-hidden">

          <div className=" w-full rounded-md background-gradient-image-three relative flex gap-4 flex-col items-center justify-center antialiased">
          <div className=" mx-auto p-4 flex justify-center items-center flex-col gap-5">
          <h1 className="relative max-w-7xl  z-10 text-lg md:text-4xl text-gray-50  text-center font-bold">
                  Welcome To ICT Division Government of the People's Republic of
                  Bangladesh
                </h1>

                <button className="bg-[#4CAF50] max-w-lg mx-auto my-1 md:my-2 px-5 md:px-8 py-1 md:py-2 md:font-semibold text-gray-50 text-center rounded-md">
                  Get Start
                </button>
              </div>
              <BackgroundBeams />
            </div>


          </div>



          
          
        </Slider>
      </div>


      <div className="absolute bottom-14 bg-slate-200  py-2 md:py-4 overflow-x-hidden">
        <Marquee speed={50} className="overflow-x-hidden">
          <span className=" text-xs md:text-base">
            {" "}
            <span className="text-red-500 ps-5  text-base font-bold ">Notice :</span> The
            Interim Government met at the President's residence and at that time
            it was decided that the swearing-in ceremony of the Interim
            Government will begin tomorrow at 7 pm, with Nahid Islam as the ICT
            Advisor.
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
