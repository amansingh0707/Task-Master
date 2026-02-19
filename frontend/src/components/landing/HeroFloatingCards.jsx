import { CheckCircle, Clock, TrendingUp } from 'lucide-react';

const HeroFloatingCards = () => {
    return (
        <div className="relative w-full h-full">
            {/* Today's Tasks Card */}
            <div className="glass-card-floating parallax-card absolute top-0 left-0 p-6 w-72 animate-fade-in-delay">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Today's Tasks</h3>
                    <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-primary-400" />
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-5 h-5 rounded border-2 border-accent-400 group-hover:bg-accent-400 transition-all duration-300 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">Review project proposal</span>
                    </div>
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-5 h-5 rounded border-2 border-accent-400 group-hover:bg-accent-400 transition-all duration-300 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">Update dashboard design</span>
                    </div>
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-5 h-5 rounded border-2 border-secondary-400 bg-secondary-400/20 transition-all duration-300">
                            <CheckCircle className="w-3 h-3 text-secondary-400 animate-check-mark" />
                        </div>
                        <span className="text-gray-400 text-sm line-through">Team standup meeting</span>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>3/8 completed</span>
                        <span className="text-accent-400">38%</span>
                    </div>
                </div>
            </div>

            {/* Upcoming Deadlines Card */}
            <div className="glass-card-floating parallax-card absolute top-20 right-0 p-6 w-64 animate-fade-in-delay-2">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Upcoming</h3>
                    <div className="w-8 h-8 rounded-lg bg-highlight-500/20 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-highlight-400" />
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-highlight-400/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-white">Client presentation</span>
                            <span className="text-xs text-highlight-400">2 days</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div className="bg-gradient-to-r from-highlight-500 to-primary-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-secondary-400/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-white">Code review</span>
                            <span className="text-xs text-secondary-400">5 days</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div className="bg-gradient-to-r from-secondary-500 to-accent-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Ring Card */}
            <div className="glass-card-floating parallax-card absolute bottom-0 left-1/4 p-6 w-56 animate-fade-in-delay-3">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 text-center">Weekly Progress</h3>
                <div className="flex justify-center items-center">
                    <div className="relative w-32 h-32">
                        <svg className="transform -rotate-90 w-32 h-32">
                            <circle
                                cx="64"
                                cy="64"
                                r="45"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="64"
                                cy="64"
                                r="45"
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray="283"
                                strokeDashoffset="75"
                                strokeLinecap="round"
                                className="progress-ring-circle"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#a855f7" />
                                    <stop offset="50%" stopColor="#06b6d4" />
                                    <stop offset="100%" stopColor="#22c55e" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-accent-400 mb-1" />
                            <span className="text-2xl font-bold gradient-text">73%</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center text-xs text-gray-400">
                    <span className="text-accent-400 font-medium">+12%</span> from last week
                </div>
            </div>
        </div>
    );
};

export default HeroFloatingCards;
