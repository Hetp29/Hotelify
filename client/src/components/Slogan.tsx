import React from "react";

interface SloganProps {
    backgroundImage: string;
}

const Slogan: React.FC<SloganProps> = ({ backgroundImage }) => {
    return (
        <div
            className="relative py-10 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{ backgroundImage }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-60 transition-all duration-1000"></div>
            <div className="container mx-auto flex flex-col items-center gap-4 text-center relative z-10">
                <h1 className="text-5xl text-white font-bold">
                    Discover your perfect stay!
                </h1>
                <p className="text-2xl text-white">
                    Find the best prices for your next adventure!
                </p>
            </div>
        </div>
    );
};

export default Slogan;
