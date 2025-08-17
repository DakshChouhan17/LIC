// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useTranslation } from 'react-i18next';  

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { i18n, t } = useTranslation();  

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   const getNavLinkClass = (path) =>
//     `block py-2 px-3 rounded md:p-0 ${
//       location.pathname === path
//         ? "text-blue-700 dark:text-blue-500 font-bold"
//         : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//     }`;

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md sticky top-0 z-50">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src="/logo.png" className="h-12" alt="Company Logo" /> {/* Adjust path if needed */}
//           <span className="self-center text-3xl font-extrabold whitespace-nowrap text-blue-800 dark:text-white">
//             YourBrand
//           </span>
//         </Link> 

//         <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button
//             onClick={toggleMenu}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded={isOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
//           </button>
//         </div>

//         <div
//           className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//             isOpen ? "" : "hidden"
//           }`}
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link to="/" className={getNavLinkClass("/")} aria-current="page">
//                 {t('navbar.home')}  
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className={getNavLinkClass("/about")}>
//                 {t('navbar.about')}  
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className={getNavLinkClass("/services")}>
//                 {t('navbar.services')}  
//               </Link>
//             </li>
//             <li>
//               <Link to="/whyme" className={getNavLinkClass("/whyme")}>
//                 {t('navbar.why_me')} 
//               </Link>
//             </li>
//             <li>
//               <Link to="/testimonials" className={getNavLinkClass("/testimonials")}>
//                 {t('navbar.testimonials')} 
//               </Link>
//             </li>
//             <li>
//               <Link to="/gallery" className={getNavLinkClass("/gallery")}>
//                 {t('navbar.gallery')} 
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className={getNavLinkClass("/contact")}>
//                 {t('navbar.contact')} 
//               </Link>
//             </li>
//           </ul>

//           {/* Language Switcher */}
//           <div className="flex items-center md:ml-4 mt-4 md:mt-0 space-x-2 p-2 md:p-0 bg-gray-100 md:bg-transparent rounded-lg">
//             <button
//               onClick={() => changeLanguage('en')}
//               className={`px-3 py-1 rounded-md text-sm font-semibold ${
//                 i18n.language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
//               } transition-colors duration-200`}
//             >
//               EN
//             </button>
//             <button
//               onClick={() => changeLanguage('hi')}
//               className={`px-3 py-1 rounded-md text-sm font-semibold ${
//                 i18n.language === 'hi' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
//               } transition-colors duration-200`}
//             >
//               HI
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  // 👇 yeh check karega ki admin login hai ya nahi
  const isAdmin = localStorage.getItem("admin");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getNavLinkClass = (path) =>
    `block py-2 px-3 rounded md:p-0 ${
      location.pathname === path
        ? "text-blue-700 dark:text-blue-500 font-bold"
        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("admin"); // logout
    navigate("/admin"); // redirect to login page
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* ✅ Logo + Brand / Admin Panel */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-12" alt="Company Logo" />
          <span className="self-center text-2xl font-extrabold whitespace-nowrap text-blue-800 dark:text-white">
            {isAdmin ? "Admin Panel" : "YourBrand"}
          </span>
        </Link>

        {/* ✅ Agar Admin hai to sirf Logout button dikhao */}
        {isAdmin ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            Logout
          </button>
        ) : (
          <>
            {/* --- Normal User Navbar --- */}
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
            </div>

            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isOpen ? "" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/" className={getNavLinkClass("/")} aria-current="page">
                    {t("navbar.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={getNavLinkClass("/about")}>
                    {t("navbar.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={getNavLinkClass("/services")}>
                    {t("navbar.services")}
                  </Link>
                </li>
                <li>
                  <Link to="/whyme" className={getNavLinkClass("/whyme")}>
                    {t("navbar.why_me")}
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className={getNavLinkClass("/testimonials")}>
                    {t("navbar.testimonials")}
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={getNavLinkClass("/gallery")}>
                    {t("navbar.gallery")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={getNavLinkClass("/contact")}>
                    {t("navbar.contact")}
                  </Link>
                </li>
              </ul>

              {/* Language Switcher */}
              <div className="flex items-center md:ml-4 mt-4 md:mt-0 space-x-2 p-2 md:p-0 bg-gray-100 md:bg-transparent rounded-lg">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 rounded-md text-sm font-semibold ${
                    i18n.language === "en"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  } transition-colors duration-200`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("hi")}
                  className={`px-3 py-1 rounded-md text-sm font-semibold ${
                    i18n.language === "hi"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  } transition-colors duration-200`}
                >
                  HI
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
