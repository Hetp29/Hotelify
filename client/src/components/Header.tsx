import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";

interface HeaderProps {
    backgroundImage: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundImage }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className="relative bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{ backgroundImage }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-60 transition-all duration-1000"></div>
            <div className="relative z-10 bg-opacity-75 py-4 shadow-md transition-all duration-1000">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl text-white font-extrabold tracking-wide">
                        <NavLink to="/" end className="hover:underline">Hotelify.com</NavLink>
                    </h1>
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        {isOpen && <DropDown />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
