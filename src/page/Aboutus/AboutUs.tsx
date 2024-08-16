
import { WobbleCard } from "@/components/ui/wobble-card";
import signe from "../../assets/check-mark.png";

const AboutUs = () => {
  return (
    <div className="px-2 md:px-8 xl:px-16 md:mt-20  mt-10">
      <div className="flex flex-col justify-start items-start">

      <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-2">
          <img src={signe} alt="check-mark" className="w-12 md:w-14" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Our Respected
            <span className="text-[#4CAF50]"> Advisory & Secretary</span>
          </h2>
        </div>
        <p className="mt-3 text-sm md:text-base text-gray-600">
        Establishment of a prosperous Sonar Bangla through reliable cyber
          access at the grassroots level, development of IT based human
          resources, export-oriented development of IT industry and the use of
          citizen-friendly IT technology.And also People- friendly information
          technology in building Sonar Bangla.
        </p>
      </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-[30rem]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-900">
          The secretary Department of Information and Communication Technology
          </h2>
          <p className="mt-4 text-left  text-base/6 text-gray-700">
          An officer of Bangladesh Civil Service. He served as Secretary (Coordination and Reforms) in the Cabinet Department.
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
        <h2 className="max-w-96  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        We are giving a brief introduction of our minister here
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
         we can get there position name and and others information
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#77CA7A] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className=" ">
          <h2 className="max-w-sm md:max-w-[40rem]  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-700">
          The Honorable advisor to the Ministry of Posts, Telecommunications and 
            Information Technology
          </h2>
          <p className="mt-4 max-w-[28rem] text-left  text-base/6 text-gray-500">
          He has been the ICT Advisor to the Interim Government of Bangladesh since August 8, 2024, and also the main coordinators of the Anti-discrimination Students Movement.
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
