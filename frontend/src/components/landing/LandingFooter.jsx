import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const LandingFooter = () => {
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            className={`relative bg-gray-950 text-gray-300 pt-20 pb-8 overflow-hidden ${isVisible ? 'footer-reveal' : 'opacity-0'
                }`}
        >
            {/* Gradient Glow Background */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

            {/* Ambient Glows - Intensify on reveal */}
            <div
                className={`absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-60 animate-glow-pulse' : 'opacity-30'
                    }`}
            ></div>
            <div
                className={`absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-60 animate-glow-pulse' : 'opacity-30'
                    }`}
                style={{ animationDelay: '1s' }}
            ></div>
            <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/5 rounded-full blur-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-60' : 'opacity-20'
                    }`}
            ></div>

            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
                    {/* Left Section - Logo and Tagline (2 columns) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent mb-4 animate-gradient-shift">
                            Task Master
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
                            One workspace to plan, track, and complete work with clarity.
                        </p>

                        {/* CTA Button */}
                        <Link to="/register">
                            <button className="group relative px-6 py-3 rounded-xl glass-card-light hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-primary-400/50 hover:shadow-glow mb-8">
                                <span className="flex items-center space-x-2 text-white font-semibold">
                                    <span>Get Started</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Product Column */}
                    <div className={`glass-column glass-column-stagger-1 ${isVisible ? '' : 'opacity-0'}`}>
                        <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-primary-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-primary-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#use-cases" className="text-gray-400 hover:text-primary-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-primary-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    Use Cases
                                </a>
                            </li>
                            <li>
                                <Link to="/login" className="text-gray-400 hover:text-primary-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-primary-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className={`glass-column glass-column-stagger-2 ${isVisible ? '' : 'opacity-0'}`}>
                        <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#docs" className="text-gray-400 hover:text-secondary-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-secondary-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    Docs
                                </a>
                            </li>
                            <li>
                                <a href="#guides" className="text-gray-400 hover:text-secondary-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-secondary-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    Guides
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-secondary-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className={`glass-column glass-column-stagger-3 ${isVisible ? '' : 'opacity-0'}`}>
                        <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-accent-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-accent-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-accent-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-accent-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#privacy" className="text-gray-400 hover:text-accent-400 link-hover-glow flex items-center group">
                                    <span className="w-0 h-px bg-accent-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Task Master. All rights reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg glass-card-light hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-secondary-400/50"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-secondary-400 transition-colors" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg glass-card-light hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-primary-400/50"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg glass-card-light hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-accent-400/50"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-accent-400 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
