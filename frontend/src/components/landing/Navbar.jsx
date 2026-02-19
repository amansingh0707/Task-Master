import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Task master logo.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                ? 'backdrop-blur-xl bg-gray-900/80 shadow-lg shadow-primary-500/10'
                : 'backdrop-blur-sm bg-gray-900/60'
                }`}
            style={{
                borderBottom: scrolled ? '1px solid rgba(168, 85, 247, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img
                            src={logo}
                            alt="Task Master"
                            className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                        />
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient-shift">
                            Task Master
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-gray-300 hover:text-primary-400 transition-all duration-300 relative group"
                        >
                            Product
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#features"
                            className="text-gray-300 hover:text-primary-400 transition-all duration-300 relative group"
                        >
                            Features
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#docs"
                            className="text-gray-300 hover:text-primary-400 transition-all duration-300 relative group"
                        >
                            Docs
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300"></span>
                        </a>

                        <Link to="/login">
                            <button className="px-5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-primary-400/50">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-glow transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                                <span className="relative z-10">Get Started Free</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden backdrop-blur-xl bg-gray-900/95 border-t border-white/10 animate-slide-down">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <a
                            href="#features"
                            className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Product
                        </a>
                        <a
                            href="#features"
                            className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#docs"
                            className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Docs
                        </a>
                        <div className="pt-2 space-y-2">
                            <Link to="/login" className="block" onClick={() => setIsMenuOpen(false)}>
                                <button className="w-full px-5 py-3 rounded-lg text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register" className="block" onClick={() => setIsMenuOpen(false)}>
                                <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-glow transition-all duration-300">
                                    Get Started Free
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
