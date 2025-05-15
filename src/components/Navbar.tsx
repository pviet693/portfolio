import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MENU_LINKS } from "../utils/data";
import LOGO from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true); // Show menu on larger screens
            } else {
                setIsOpen(false); // Hide menu on smaller screens
            }
        };

        // Initial check to set menu state based on screen size
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="container mx-auto sticky top-5 z-10">
            <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
                {/* Logo */}
                <img src={LOGO} alt="Logo" className="h-7 w-auto ml-6 -mb-1" />

                {/* Hamburger Icon (Visible only on small screens) */}
                <button
                    className="block md:hidden text-[#333] mr-6 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation links */}
                <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
                    {MENU_LINKS.map((link) => (
                        <li key={link.id} className="menu-item">
                            <Link
                                activeClass="active"
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={link.offset}
                                className="menu-item"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hire me button */}
                <button className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
                    Hire me
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
