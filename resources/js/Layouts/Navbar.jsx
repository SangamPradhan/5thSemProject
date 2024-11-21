import { Link } from "@inertiajs/react"; // Import Link from Inertia
import React, { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div
            className="relative z-10 w-full dark:bg-black dark:text-white duration-300"
        >
            <div className="container py-3 md:py-2">
                <div className="flex justify-between items-center">
                    {/* Logo section */}
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3"
                    >
                        <img src={Logo} alt="Logo" className="w-5" />
                        <span className="text-2xl sm:text-3xl font-semibold">
                            AI Solution
                        </span>
                    </Link>
                    {/* Desktop view Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            <li className="py-4">
                                <Link
                                    href="about"
                                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link
                                    href="/#services"
                                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link
                                    href="/#projects"
                                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <button className="primary-btn">Get in Touch</button>
                            </li>
                            <li>
                                <DarkMode />
                            </li>
                        </ul>
                    </nav>
                    {/* Mobile view Drawer */}
                    <div className="flex items-center gap-4 md:hidden">
                        <DarkMode />
                        {/* Mobile Hamburger icon */}
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all"
                                size={30}
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all"
                                size={30}
                            />
                        )}
                    </div>
                </div>
            </div>
            {/* Responsive Menu */}
            <ResponsiveMenu showMenu={showMenu} />
        </div>
    );
};

export default Navbar;
