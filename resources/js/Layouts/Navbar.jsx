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
                        className="flex items-center gap-6" // Increased gap for more spacing
                    >
                        <img src={Logo} alt="Logo" className="w-7 ml-5" />
                        <span className="text-2xl sm:text-3xl font-semibold pl-0"> {/* Added padding */}
                            AI Solution
                        </span>
                    </Link>

                    {/* Desktop view Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-7 mr-0">
                            <li className="py-5">
                                <Link
                                    href="aboutus"
                                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link
                                    href="/services"
                                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link
                                    href="/projects"
                                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                            <Link
                                href="/event"
                                className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    Events
                                </Link>
                            </li>

                            <li>
                            <Link
                                href="/gallery"
                                className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <button className="primary-btn"> <Link href="/contactpage">Contact Us</Link> </button>
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
