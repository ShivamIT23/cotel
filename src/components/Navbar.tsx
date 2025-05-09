import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Sub/Button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const changeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean-up in case component unmounts with menu open
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="min-h-[80px] h-fit flex items-center w-full justify-center px-[6vw]"
      >
        <div className=" md:flex h-full my-auto inter w-[40%] font-normal text-[16px] hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exploreResidences">Explore Residences</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="flex md:w-[10%]">
          <img
            src="/home/logo1.png"
            alt="Company-Logo"
            className="h-[60px] w-[170px] object-contain"
          />
        </div>

        <div className="md:flex hidden w-[40%] justify-end">
          <Button>
            Contact Us <img className="h-4 aspect-auto" src="/phone.png" />
          </Button>
        </div>
        <div className=" md:hidden h-full flex my-auto">
          <img
            src="hamburger.png"
            className="w-8 md:w-12 "
            onClick={() => {
              setOpenMenu(true);
            }}
          ></img>
        </div>
      </motion.nav>
      {openMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed z-50 top-0 right-0 bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] h-screen w-screen"
        >
          <button className="absolute top-0 right-0 w-20 h-20 p-5">
            <img src="close.png" alt="" onClick={changeMenu} />
          </button>
          <div className="my-auto w-[100svw] h-screen flex flex-col justify-evenly p-20 text-4xl sm:text-5xl md:text-3xl xl:text-4xl">
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-inherit transition-all duration-200 ease-in-out "
              onClick={changeMenu}
              to="/"
            >
              Home
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-inherit transition-all duration-200 ease-in-out"
              to="/exploreResidences"
              onClick={changeMenu}
            >
              Explore Residences
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-inherit transition-all duration-800 ease-in-out "
              to="/about"
              onClick={changeMenu}
            >
              About
            </Link>
            <div>
              <Button>Contact Us <img className="h-4 aspect-auto pl-2" src="/phone.png" /></Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

function NavLink({ to, children }: { to: string; children: string }) {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={` py-2 px-5 whitespace-nowrap rounded-md transition-all duration-200 ease-in-out ${
        isActive
          ? "text-inherit"
          : "text-[#17152070] hover:bg-[#444823] hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
