import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";


import ResponsiveMenu from "./ResponsiveMenu";

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    // Toggle function for the responsive menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            {/* Header Section */}
            <header className="relative z-100 w-full">
                <div className="w-full px-1">
                    {/* Navbar */}
                    <Navbar />

                    {/* Mobile Dark Mode and Hamburger Icon */}
                    <div className="flex items-center justify-between md:hidden py-3">
                        {/* Dark Mode Toggle */}
                        <DarkMode />

                        {/* Hamburger Menu */}
                        <button
                            onClick={toggleMenu}
                            aria-label={showMenu ? "Close menu" : "Open menu"}
                            className="cursor-pointer text-2xl"
                        >
                            {showMenu ? "X Close" : "☰ Open"}
                        </button>
                    </div>
                </div>

                {/* Responsive Menu */}
                <ResponsiveMenu showMenu={showMenu} />
            </header>


            {/* Main Content */}
            <main className="w-full px-1 py-0">{children}</main>
        </>
    );
};

export default Layout;
