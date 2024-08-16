
import { WobbleCard } from "@/components/ui/wobble-card";
import signe from "../../assets/check-mark.png";

const AboutUs = () => {
  return (
    <div className="px-2 md:px-8 xl:px-16 mt-20 ">
      <div className="flex flex-col justify-start items-start">
      <div>
        <div className="flex justify-start items-center gap-5">
          <img src={signe} alt="" className="w-14" />{" "}
          <div className="text-2xl font-semibold text-gray-900">
            About <span className="text-[#4CAF50]">us</span>
          </div>
        </div>
        <span className="text-sm text-gray-700">
          Establishment of a prosperous Sonar Bangla through reliable cyber
          access at the grassroots level, development of IT based human
          resources, export-oriented development of IT industry and the use of
          citizen-friendly IT technology.And also People- friendly information
          technology in building Sonar Bangla.
        </span>
      </div>
      {/* second section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto mt-10">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-[25rem]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-900">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-gray-700">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/shocib.jpg"
          width={500}
          height={500}
          alt="shocib"
          className="absolute -right-4 lg:-right-[20%] z-30 bg-natural grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#77CA7A] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className=" ">
          <h2 className="max-w-sm md:max-w-[40rem]  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-700">
          The Honorable advisor to the Ministry of Posts, Telecommunications and 
            Information Technology
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-gray-500">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/nahid.webp"
          width={500}
          height={500}
          alt="linear demo img"
          className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
      </div>
    </div>
  );
};

export default AboutUs;
