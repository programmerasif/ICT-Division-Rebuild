import navImg from "../../assets/navBg.png";
import logo from "../../assets/logo.png";
import circle from "../../assets/circle.png";
const NavBr = () => {
  return (
    <div className="">
      <img src={navImg} alt="" className="h-[100px] w-full relative" />
      <div className="absolute z-20 flex justify-between items-center top-0 w-full h-[100px] px-16">
  <div className="relative font-semibold w-[9rem]"> {/* Set this div as relative */}
    <img src={circle} alt="" className="w-full pt-3" /> {/* The image takes full width */}
    <div className="absolute top-4 inset-0 flex justify-center items-center flex-col">
      <span className="text-gray-900">Zen-z</span>
      <span className="text-[#EC1C24]">বাংলাদেশ 2.o</span>
    </div>
  </div>
  <div>
    <img src={logo} alt="" className="w-52" />
  </div>
  <div className="relative">
    <input
      type="text"
      id="item"
      className="shadow appearance-none rounded-md border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Search Here"
    />
    <span className="absolute top-3 right-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 text-[#4CAF50]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </span>
  </div>
</div>
      <div className="flex justify-between items-center px-16 bg-gray-50 font-semibold text-gray-900 ">
        <div className="py-3 underline underline-offset-8 text-[#EC1C24]">Home</div>
        <div className="cursor-pointer">E-service</div>
        <div className="cursor-pointer">Minister of State</div>
        <div className="cursor-pointer">Low & Policy</div>
        <div className="cursor-pointer">Program</div>
        <div className="cursor-pointer">Gallary</div>
        <div className="cursor-pointer">About Us</div>
        <div className="cursor-pointer">Contact</div>
        <div className="cursor-pointer">Affiliated office</div>
      </div>
    </div>
  );
};

export default NavBr;
