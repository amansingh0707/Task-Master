import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import LandingFooter from '../components/landing/LandingFooter';
import HeroFloatingCards from '../components/landing/HeroFloatingCards';
import FeaturesSection from '../components/landing/FeaturesSection';
import DashboardPreview from '../components/landing/DashboardPreview';

const LandingPage = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Force dark mode for glassmorphism design
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }, []);

    const toggleDarkMode = () => {
        // Keep dark mode locked for this design
        return;
    };

    return (
        <div className="min-h-screen bg-gray-950">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-mesh"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>

                {/* Ambient Glows */}
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-glow-pulse"></div>
                <div className="absolute top-40 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card-light mb-8 animate-fade-in">
                                <Sparkles className="w-4 h-4 text-primary-400" />
                                <span className="text-sm text-gray-300">Your productivity, amplified</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-delay leading-tight">
                                One Workspace.
                                <br />
                                <span className="gradient-text">Every Task</span>
                                <br />
                                Under Control.
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-delay-2 leading-relaxed">
                                Task Master helps individuals and teams organize work, focus on what matters, and move forward with clarity—powered by a smart, real-time dashboard.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
                                <Link to="/register">
                                    <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-glow transition-all duration-500 hover:scale-105 overflow-hidden">
                                        <span className="relative z-10 flex items-center justify-center space-x-2">
                                            <span>Get Started Free</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button className="px-8 py-4 rounded-xl glass-card-light text-white font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-primary-400/50 hover:shadow-glow-sm">
                                        Explore Dashboard
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Floating Cards */}
                        <div className="relative h-[600px] hidden lg:block">
                            <HeroFloatingCards />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-fade-in-delay-3">
                    <span className="text-xs text-gray-500 mb-2">Scroll to explore</span>
                    <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center">
                        <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-scroll-indicator"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <FeaturesSection />

            {/* Dashboard Preview */}
            <DashboardPreview />

            {/* CTA Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-gray-950 to-secondary-900/20"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500 to-transparent"></div>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-[1200px] mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="glass-card p-12 md:p-16 animate-fade-in">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Transform
                            <br />
                            Your{' '}
                            <span className="gradient-text">Productivity</span>?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join thousands who are already mastering their tasks and achieving their goals with clarity and momentum.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/register">
                                <button className="group relative px-10 py-5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg hover:shadow-glow-lg transition-all duration-500 hover:scale-105 overflow-hidden">
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        <span>Start Free Today</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </button>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500 mt-6">
                            No credit card required • Free forever • Premium features included
                        </p>
                    </div>
                </div>
            </section>

            <LandingFooter />
        </div>
    );
};

export default LandingPage;
