// /* eslint-disable @typescript-eslint/no-explicit-any */
// import navImg from "../../assets/navBg.png";
// import logo from "../../assets/logo.png";
// import circle from "../../assets/circle.png";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const NavBr = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);

//   const handleMouseEnter = (menu: any) => {
//     if (window.innerWidth >= 1024) {
//       setActiveMenu(menu);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (window.innerWidth >= 1024) {
//       setActiveMenu(null);
//     }
//   };

//   const handleMobileMenuClick = (menu: any) => {
//     if (mobileSubMenuOpen === menu) {
//       setMobileSubMenuOpen(null);
//     } else {
//       setMobileSubMenuOpen(menu);
//     }
//   };

//   return (
//     <div className="relative">
//       <img src={navImg} alt="" className="h-[100px] w-full relative" />
//       <div className="absolute z-20 flex justify-start md:justify-between items-center top-0 w-full h-[100px] px-2 md:px-8 xl:px-16">
//         <div className="relative font-semibold w-[9rem] hidden md:block">
//           <img src={circle} alt="" className="w-full pt-3" />
//           <div className="absolute top-4 inset-0 flex justify-center items-center flex-col">
//             <span className="text-gray-900">Zen-z</span>
//             <span className="text-[#EC1C24]">বাংলাদেশ 2.o</span>
//           </div>
//         </div>
//         <div>
//           <img src={logo} alt="" className="w-52" />
//         </div>
//         <div className="relative hidden md:block">
//           <input
//             type="text"
//             id="item"
//             className="shadow appearance-none rounded-md border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Search Here"
//           />
//           <span className="absolute top-3 right-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6 text-[#4CAF50]"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-between items-center px-2 md:px-8 xl:px-16 bg-gray-50 font-semibold text-gray-900 relative">
//         <button
//           className="lg:hidden block ml-auto p-2 absolute -top-[4.5rem] right-2 text-gray-900 bg-slate-50 rounded-md z-30"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18 18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
//               />
//             </svg>
//           )}
//         </button>

//         <div
//           className={`flex-col lg:flex-row flex z-50 ${
//             isOpen ? "flex gap-5 px-2" : "hidden"
//           } lg:flex lg:items-center justify-between lg:space-x-8 w-full sm:text-sm xl:text-base`}
//         >
//           {/* Main Menu Items */}
//           <NavLink to='/'
//             className="relative py-3 underline underline-offset-8 text-[#EC1C24] cursor-pointer"
//             onMouseEnter={() => handleMouseEnter("home")}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMobileMenuClick("home")}
//           >
//             Home
//             {/* Submenu */}
//             {activeMenu === "home" || mobileSubMenuOpen === "home"
//               ? null
//               : null}
//           </NavLink>

//           {/* Other Menu Items */}
//           <div
//             className="relative cursor-pointer"
//             onMouseEnter={() => handleMouseEnter("e-service")}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMobileMenuClick("e-service")}
//           >
//             E-service
//             {activeMenu === "e-service" || mobileSubMenuOpen === "e-service" ? (
//               <div className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] ${!activeMenu ? "w-full flex flex-col gap-4 justify-start items-start" : "w-[500px] grid grid-cols-2 justify-between items-center gap-4 "}`}>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Submit Salary Online
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Innovation Information Systems Management
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Freelancer ID
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Project Monitoring System
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Submit ACR online
//                 </div>
//               </div>
//             ) : null}
//           </div>

//           {/* Additional Menu Items with Submenus */}
//           <div
//             className="relative cursor-pointer"
//             onMouseEnter={() => handleMouseEnter("minister")}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMobileMenuClick("minister")}
//           >
//             Minister of State
//             {activeMenu === "minister" || mobileSubMenuOpen === "minister" ? (
//               <div className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] ${!activeMenu ? "w-full flex flex-col gap-4 justify-start items-start" : "w-[500px] grid grid-cols-2 justify-between items-center gap-4 "}`}>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Submit Salary Online
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Innovation Information Systems Management
//                 </div>
//               </div>
//             ) : null}
//           </div>

//           {/* More menu items can be added similarly */}
//           <NavLink to='/notice' className="cursor-pointer">Notice</NavLink>

//           <div
//             className="relative cursor-pointer"
//             onMouseEnter={() => handleMouseEnter("Acts/Policy")}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMobileMenuClick("Acts/Policy")}
//           >
//             Acts/Policy
//             {activeMenu === "Acts/Policy" ||
//             mobileSubMenuOpen === "Acts/Policy" ? (
//               <div className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] ${!activeMenu ? "w-full flex flex-col gap-4 justify-start items-start" : "w-[500px] grid grid-cols-2 justify-between items-center gap-4 "}`}>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Acts
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Policy
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Guidelines and Strategies
//                 </div>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   Draft Acts, Rules and Policy
//                 </div>
//               </div>
//             ) : null}
//           </div>
//           <div
//             className="relative cursor-pointer"
//             onMouseEnter={() => handleMouseEnter("Acts/Policy")}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMobileMenuClick("Acts/Policy")}
//           >
//             Affiliated Office
//             {activeMenu === "Affiliated Office" ||
//             mobileSubMenuOpen === "Affiliated Office" ? (
//               <div className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] ${!activeMenu ? "w-full flex flex-col gap-4 justify-start items-start" : "w-[500px] grid grid-cols-2 justify-between items-center gap-4 "}`}>
//                 <div className="cursor-pointer hover:bg-gray-100 px-4 py-2 hover:underline">
//                   List of Offices/Institutions
//                 </div>
//               </div>
//             ) : null}
//           </div>
//           <div className="cursor-pointer">Gallery</div>
//           <div className="cursor-pointer">About Us</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBr;

/* eslint-disable @typescript-eslint/no-explicit-any */
import navImg from "../../assets/navBg.png";
import logo from "../../assets/logo.png";
import circle from "../../assets/circle.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth >= 1024) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveMenu(null);
    }
  };

  const handleMobileMenuClick = (menu: string) => {
    if (window.innerWidth < 1024) {
      if (mobileSubMenuOpen === menu) {
        setMobileSubMenuOpen(null);
      } else {
        setMobileSubMenuOpen(menu);
      }
    }
  };

  return (
    <div className="relative">
      <img src={navImg} alt="" className="h-[100px] w-full relative" />
      <div className="absolute z-20 flex justify-start md:justify-between items-center top-0 w-full h-[100px] px-2 md:px-8 xl:px-16">
        <div className="relative font-semibold w-[9rem] hidden md:block">
          <img src={circle} alt="" className="w-full pt-3" />
          <div className="absolute top-4 inset-0 flex justify-center items-center flex-col">
            <span className="text-gray-900">Zen-z</span>
            <span className="text-[#EC1C24]">বাংলাদেশ 2.o</span>
          </div>
        </div>
        <div>
          <img src={logo} alt="" className="w-52" />
        </div>
        <div className="relative hidden md:block">
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
              className="w-6 h-6 text-[#4CAF50]"
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

      <div className="flex flex-col lg:flex-row justify-between items-center px-2 md:px-8 xl:px-16 bg-gray-50 font-semibold text-gray-900 relative">
        <button
          className="lg:hidden block ml-auto p-2 absolute -top-[4.5rem] right-2 text-gray-900 bg-slate-50 rounded-md z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          )}
        </button>

        <div
          className={`flex-col lg:flex-row flex z-50 ${
            isOpen ? "flex gap-5 px-2" : "hidden"
          } lg:flex lg:items-center justify-between lg:space-x-8 w-full sm:text-sm xl:text-base`}
        >
          {/* Home Menu */}
          <NavLink
            to="/"
            className="relative py-3 underline underline-offset-8 text-[#EC1C24] cursor-pointer"
            
          >
            Home
          </NavLink>

          {/* About Us Menu */}
          

          {/* E-service Menu */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("e-service")}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              if (window.innerWidth >= 1024) {
                e.preventDefault(); // Prevent click for large screens
              } else {
                handleMobileMenuClick("e-service");
              }
            }}
          >
            E-service
            {activeMenu === "e-service" || mobileSubMenuOpen === "e-service" ? (
              <div
                className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] w-[300px] grid gap-2"
              >
                <NavLink to="/services/salary" className="hover:underline">
                  Submit Salary Online
                </NavLink>
                <NavLink to="/services/innovation" className="hover:underline">
                  Innovation Information Systems Management
                </NavLink>
                <NavLink to="/services/freelancer-id" className="hover:underline">
                  Freelancer ID
                </NavLink>
                <NavLink to="/services/project-monitoring" className="hover:underline">
                  Project Monitoring System
                </NavLink>
                <NavLink to="/services/submit-acr" className="hover:underline">
                  Submit ACR Online
                </NavLink>
              </div>
            ) : null}
          </div>

          {/* Minister of State Menu */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("minister")}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              if (window.innerWidth >= 1024) {
                e.preventDefault(); // Prevent click for large screens
              } else {
                handleMobileMenuClick("minister");
              }
            }}
          >
            Minister of State
            {activeMenu === "minister" || mobileSubMenuOpen === "minister" ? (
              <div
                className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] w-[300px] grid gap-2"
              >
                <NavLink to="/minister/profile" className="hover:underline">
                  Profile
                </NavLink>
                <NavLink to="/minister/speeches" className="hover:underline">
                  Speeches
                </NavLink>
                <NavLink to="/minister/press" className="hover:underline">
                  Press Release
                </NavLink>
                <NavLink to="/minister/holders" className="hover:underline">
                  Present Office Holders
                </NavLink>
              </div>
            ) : null}
          </div>

          {/* Projects Menu */}
          <NavLink to={'/notice'}>
            Notice
          </NavLink>

          {/* News & Media Menu */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("media")}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              if (window.innerWidth >= 1024) {
                e.preventDefault(); // Prevent click for large screens
              } else {
                handleMobileMenuClick("media");
              }
            }}
          >
            News & Media
            {activeMenu === "media" || mobileSubMenuOpen === "media" ? (
              <div
                className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] w-[300px] grid gap-2"
              >
                <NavLink to="/media/news" className="hover:underline">
                  News
                </NavLink>
                <NavLink to="/media/press-releases" className="hover:underline">
                  Press Releases
                </NavLink>
                <NavLink to="/media/gallery" className="hover:underline">
                  Gallery
                </NavLink>
              </div>
            ) : null}
          </div>
          
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              if (window.innerWidth >= 1024) {
                e.preventDefault(); // Prevent click for large screens
              } else {
                handleMobileMenuClick("about");
              }
            }}
          >
            About Us
            {activeMenu === "about" || mobileSubMenuOpen === "about" ? (
              <div
                className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] w-[300px] grid gap-2"
              >
                <NavLink to="/about/history" className="hover:underline">
                  History
                </NavLink>
                <NavLink to="/about/team" className="hover:underline">
                  Our Team
                </NavLink>
                <NavLink to="/about/vision" className="hover:underline">
                  Vision & Mission
                </NavLink>
                <NavLink to="/about/contact" className="hover:underline">
                  Contact
                </NavLink>
              </div>
            ) : null}
          </div>
          {/* Acts/Policy Menu */}
          {/* Office Menu */}
<div
  className="relative cursor-pointer"
  onMouseEnter={() => handleMouseEnter("office")}
  onMouseLeave={handleMouseLeave}
  onClick={(e) => {
    if (window.innerWidth >= 1024) {
      e.preventDefault(); // Prevent click for large screens
    } else {
      handleMobileMenuClick("office");
    }
  }}
>
  Affiliated Office
  {activeMenu === "office" || mobileSubMenuOpen === "office" ? (
    <div
      className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] w-[300px] grid gap-2"
    >
      <NavLink to="/office/list" className="hover:underline">
        Office List
      </NavLink>
      <NavLink to="/office/branches" className="hover:underline">
        Branches
      </NavLink>
      <NavLink to="/office/contact" className="hover:underline">
        Contact Information
      </NavLink>
      <NavLink to="/office/directory" className="hover:underline">
        Employee Directory
      </NavLink>
    </div>
  ) : null}
</div>
<div
  className="relative cursor-pointer"
  onMouseEnter={() => handleMouseEnter("actsPolicy")}
  onMouseLeave={handleMouseLeave}
  onClick={(e) => {
    if (window.innerWidth >= 1024) {
      e.preventDefault(); // Prevent click for large screens
    } else {
      handleMobileMenuClick("actsPolicy");
    }
  }}
>
  Acts/Policy
  {activeMenu === "actsPolicy" || mobileSubMenuOpen === "actsPolicy" ? (
    <div
      className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md p-3 z-10 text-xs border-t-4 border-[#4CAF50] w-[300px] grid gap-2"
    >
      <NavLink to="/acts/rules" className="hover:underline">
        Acts
      </NavLink>
      <NavLink to="/policy/guidelines" className="hover:underline">
        Policy
      </NavLink>
      <NavLink to="/policy/guidelines-strategies" className="hover:underline">
        Guidelines and Strategies
      </NavLink>
      <NavLink to="/policy/draft-acts" className="hover:underline">
        Draft Acts, Rules and Policy
      </NavLink>
    </div>
  ) : null}
</div>
        </div>
      </div>
    </div>
  );
};

export default NavBr;
