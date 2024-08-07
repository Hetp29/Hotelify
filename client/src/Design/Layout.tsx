import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import img1 from '../components/Images/i1.jpeg';
import img2 from '../components/Images/i2.jpeg';
import img3 from '../components/Images/i3.jpeg';

const Layout = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        `url(${img1})`,
        `url(${img2})`,
        `url(${img3})`,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    const backgroundImage = images[currentImageIndex];

    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            <Header backgroundImage={backgroundImage} />
            <Slogan backgroundImage={backgroundImage} />
        </div>
    );
};

export default Layout;
