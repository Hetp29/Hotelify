import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = () => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
            <NavLink
                to="/log-in"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Log In
                </NavLink>
                <NavLink
                    to="/sign-up"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign Up
                    </NavLink>
        </div>
    );
};

export default DropDown;