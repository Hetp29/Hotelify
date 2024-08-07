import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="bg-blue-700 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-4xl text-white font-extrabold tracking-wide">
                    <NavLink to="/" end className="hover:underline">Hotelify.com</NavLink>
                </h1>
                <div className="relative">
                    <button
                        onClick={toggleDropDown}
                        className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        {isOpen && <DropDown />}
                </div>
            </div>
        </header>
    );
};
export default Header;
