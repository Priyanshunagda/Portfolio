import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
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
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                    ? "bg-primary/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/25"
                    : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="text-2xl font-display font-extrabold tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <NavLink to="/" className="flex items-center gap-1 group font-display tracking-tight text-xl font-extrabold">
                        <span className="text-white group-hover:text-accent-teal transition-colors duration-300">Priyanshu</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-purple font-black">.N</span>
                    </NavLink>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-md">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative z-10 px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                                    isActive 
                                        ? "text-white font-bold shadow-sm shadow-accent-teal/10" 
                                        : "text-slate-300 hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <motion.span 
                                            layoutId="activeNavPill"
                                            className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-xl bg-white/5 border border-white/5 text-slate-200 hover:text-accent-teal transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-[72px] left-6 right-6 p-6 bg-primary-light/95 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl z-40 flex flex-col gap-4"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block w-full py-3 px-4 rounded-xl text-lg font-semibold transition-all ${
                                            isActive 
                                                ? "bg-gradient-to-r from-accent-teal to-accent-cyan text-white shadow-md shadow-accent-teal/10" 
                                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                                        }`
                                    }
                                    onClick={toggleMenu}
                                >
                                    {link.name}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;
