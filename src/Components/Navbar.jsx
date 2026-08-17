import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/CartContext";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({location, getLocation, openDropdown, setOpenDropDown}) => {

    const {cartItem}=useCart()
    const [openNav, setOpenNav]=useState(false)
  
    const toggleDropDown=()=>{
        setOpenDropDown(!openDropdown)
    }

  return (
    <div className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex gap-7 items-center">
          <Link to="/">
            <h1 className="font-bold text-2xl tracking-widest uppercase text-black font-sans">
              Zaptro
            </h1>
          </Link>
          <div className="md:flex gap-2 cursor-pointer text-gray-500 items-center hidden text-sm hover:text-black transition-colors">
            <MapPin size={16} />
            <span className="font-medium">
              {location ? <div className="-space-y-1">
                <p>{location.countryName}</p>
                <p>{location.city}</p>
              </div> : "Add Address"}
            </span>
            <FaCaretDown size={12} onClick={toggleDropDown} />
          </div>
          {
            openDropdown ? <div className="w-[280px] h-max shadow-lg z-50 bg-white fixed top-16 left-60 border p-6 border-gray-200 rounded-sm">
                <h1 className="font-medium mb-4 text-lg flex justify-between items-center text-black">
                    Change Location 
                    <button onClick={toggleDropDown} className="text-gray-400 hover:text-black"><CgClose/></button>
                </h1>
                <button onClick={getLocation} className="w-full bg-black text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">Detect my location</button>
            </div>:null
          }
        </div>
        
        {/* menu-section */}
        <nav className="flex gap-8 items-center">
          <ul className="md:flex gap-8 items-center text-sm font-medium hidden uppercase tracking-wide">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-black pb-1" : "text-gray-500 hover:text-black"} transition-all cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-black pb-1" : "text-gray-500 hover:text-black"} transition-all cursor-pointer`
              }
            >
              <li>Shop</li>
            </NavLink>
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-black pb-1" : "text-gray-500 hover:text-black"} transition-all cursor-pointer`
              }
            >
              <li>Editorial</li>
            </NavLink>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-black pb-1" : "text-gray-500 hover:text-black"} transition-all cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          
          <Link to={"/cart"} className="relative text-black hover:text-gray-600 transition-colors">
            <IoCartOutline className="h-6 w-6" />
            <span className="bg-black flex items-center justify-center h-4 w-4 rounded-full absolute -top-1 -right-1 text-white text-[10px] font-bold">
              {cartItem.length}
            </span>
          </Link>
          
          {/* clerk.com */}
          <div className="hidden md:block">
            <SignedOut>
                <SignInButton className="bg-black text-white px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"/>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
          </div>
          
          {
            openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className="h-6 w-6 md:hidden text-black"/> : <HiMenuAlt1 onClick={()=>setOpenNav(true)} className="h-6 w-6 md:hidden text-black"/>
          }
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
    </div>
  );
};

export default Navbar;
