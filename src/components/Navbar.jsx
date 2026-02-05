import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Resume", path: "/resume" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
                    ? "bg-slate-950 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/30"
                    : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-purple cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    <NavLink to="/">{`<Priyanshu />`}</NavLink>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-lg font-medium transition-colors duration-300 relative group ${isActive ? "text-accent-teal" : "text-slate-300 hover:text-white"
                                }`
                            }
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full" />
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-200 hover:text-accent-teal transition-colors"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-primary-dark/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="text-2xl font-bold text-slate-300 hover:text-accent-teal transition-colors"
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;
