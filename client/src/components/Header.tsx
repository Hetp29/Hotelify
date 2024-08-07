import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-700 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-4xl text-white font-extrabold tracking-wide">
                    <NavLink to="/" end className="hover:underline">Hotelify.com</NavLink>
                </h1>
                <nav>
                    <NavLink
                        to="/log-in"
                        className="inline-block text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
                        >
                            Log In
                        </NavLink>
                </nav>
            </div>
        </header>
    );
};
export default Header;
// import { Link } from "react-router-dom"


// const Header = () => {
//     return (
//         <div className="bg-blue-750 py-6">
//             <div className="container mx-auto flex justify-between">
//                 <span className="text-3xl text-white font-bold tracking-tight">
//                     <Link to="/">Hotelify.com</Link>
//                 </span>
//                 <span className="flex space-x-2">
//                     <Link to="/log-in" className="flex items-center text-blue-550 px-3 font-bold hover:bg gray-100"></Link>
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Header;
