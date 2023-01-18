import React from 'react';
import Logo from '../img/logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
const Sidebar = ({ active }) => {
  return (
    <>
      <div className="bg-[rgba(51,87,117,0.05);]  flex-col justify-evenly w-[23%] h-screen hidden md:flex">
        <div className="flex items-center ">
          <a href="/">
            <img src={Logo} alt="logo" className="w-[50%]" />
          </a>
        </div>
        <div className=" flex  justify-center gap-5 flex-col p-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'bg-[#294E6D]  w-[100%] flex items-center justify-start rounded-md gap-3 p-2 hover:bg-[#2e618b] transition-all duration-200 text-white '
                : 'text-[#294E6D] flex w-[100%]  items-center justify-start rounded-md gap-3 p-2 hover:bg-[#294E6D] hover:text-white transition-all duration-200  font-normal text-base'
            }
          >
            <AiOutlineHome className="text-2xl" />
            Dashboard
          </NavLink>

          <NavLink
            activeStyle={{ color: 'red' }}
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? 'bg-[#294E6D]  w-[100%] flex items-center justify-start rounded-md gap-3 p-2 hover:bg-[#2e618b] transition-all duration-200 text-white '
                : 'text-[#294E6D] flex w-[100%]  items-center justify-start rounded-md gap-3 p-2 hover:bg-[#294E6D] hover:text-white transition-all duration-200  font-normal text-base'
            }
          >
            <MdOutlineShoppingBasket className="text-2xl" />
            Orders
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? 'bg-[#294E6D]  w-[100%] flex items-center justify-start rounded-md gap-3 p-2 hover:bg-[#2e618b] transition-all duration-200 text-white '
                : 'text-[#294E6D] flex w-[100%]  items-center justify-start rounded-md gap-3 p-2 hover:bg-[#294E6D] hover:text-white transition-all duration-200  font-normal text-base'
            }
          >
            <CiSettings className="text-2xl" />
            Settings
          </NavLink>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-between bg-[rgba(41,78,109,0.04);] gap-10 p-3 rounded-xl">
            <div className="bg-[#0f2130] w-12 h-12 rounded-lg"></div>
            <div className="flex flex-col">
              <h1 className="text-[#294E6D] font-medium text-base">John J.</h1>
              <p className="text-[#6A7F92] font-normal text-sm ">johnJames</p>
            </div>
            <IoMdArrowDropdown className="text-2xl text-[#294E6D]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
