import React, { useState } from 'react';
import Logo from '../img/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const SidebarMobile = () => {
  const [nav, setNav] = useState(false);
  // console.log(nav);
  return (
    <>
      <div
        className={` flex fixed   p-2 justify-end md:hidden h-screen  ${
          nav
            ? 'w-screen absolute top-0 left-0 z-50 bg-white '
            : 'w-[10%] items-start z-50 bg-new'
        } `}
      >
        <div onClick={() => setNav(!nav)} className="z-30">
          {nav ? (
            <AiOutlineClose size={25} className="cursor-pointer" />
          ) : (
            <FaBars size={25} className="cursor-pointer" />
          )}
        </div>
        {nav && (
          <div className="bg-new md:flex h-full flex-col justify-evenly absolute top-0 left-0 bottom-0  ">
            <div className="flex items-center mt-10 ">
              <a href="/">
                <img src={Logo} alt="logo" className="w-[70%]" />
              </a>
            </div>
            <div className=" flex  justify-center gap-5 flex-col p-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-[#294E6D]  w-[80%] flex items-center justify-start rounded-md gap-3 p-2 hover:bg-[#2e618b] transition-all duration-200 text-white '
                    : 'text-[#294E6D] flex w-[80%]  items-center justify-start rounded-md gap-3 p-2 hover:bg-[#294E6D] hover:text-white transition-all duration-200  font-normal text-base'
                }
              >
                <AiOutlineHome className="text-2xl" />
                Dashboard
              </NavLink>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-[#294E6D]  w-[80%] flex items-center justify-start rounded-md gap-3 p-2 hover:bg-[#2e618b] transition-all duration-200 text-white '
                    : 'text-[#294E6D] flex w-[80%]  items-center justify-start rounded-md gap-3 p-2 hover:bg-[#294E6D] hover:text-white transition-all duration-200  font-normal text-base'
                }
              >
                <MdOutlineShoppingBasket className="text-2xl" />
                Orders
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-[#294E6D]  w-[80%] flex items-center justify-start rounded-md gap-3 p-2 hover:bg-[#2e618b] transition-all duration-200 text-white '
                    : 'text-[#294E6D] flex w-[80%]  items-center justify-start rounded-md gap-3 p-2 hover:bg-[#294E6D] hover:text-white transition-all duration-200  font-normal text-base'
                }
              >
                <CiSettings className="text-2xl" />
                Settings
              </NavLink>
            </div>
            <div className="flex items-center p-8 ">
              <div className="flex items-center justify-between bg-[rgba(41,78,109,0.04);] gap-10 p-3 rounded-xl">
                <div className="bg-[#0f2130] w-12 h-12 rounded-lg"></div>
                <div className="flex flex-col">
                  <h1 className="text-[#294E6D] font-medium text-base">
                    John J.
                  </h1>
                  <p className="text-[#6A7F92] font-normal text-sm ">
                    johnJames
                  </p>
                </div>
                <IoMdArrowDropdown className="text-2xl text-[#294E6D]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarMobile;
