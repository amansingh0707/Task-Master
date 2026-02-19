import { TrendingUp, CheckCircle, Circle, Timer } from 'lucide-react';

const DashboardPreview = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Your Command Center
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A focused workspace where every task, deadline, and insight lives in one beautiful dashboard.
                    </p>
                </div>

                {/* Dashboard Mockup */}
                <div className="glass-card p-8 md:p-12 animate-fade-in-delay">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Progress Ring */}
                        <div className="glass-card-light p-6 tilt-on-hover">
                            <h3 className="text-sm font-semibold text-gray-400 mb-6">Today's Completion</h3>
                            <div className="flex justify-center items-center mb-4">
                                <div className="relative w-40 h-40">
                                    <svg className="transform -rotate-90 w-40 h-40">
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="60"
                                            stroke="rgba(255, 255, 255, 0.1)"
                                            strokeWidth="12"
                                            fill="none"
                                        />
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="60"
                                            stroke="url(#dashGradient)"
                                            strokeWidth="12"
                                            fill="none"
                                            strokeDasharray="377"
                                            strokeDashoffset="95"
                                            strokeLinecap="round"
                                            className="progress-ring-circle"
                                        />
                                        <defs>
                                            <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#a855f7" />
                                                <stop offset="100%" stopColor="#06b6d4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-4xl font-bold gradient-text">75%</span>
                                        <span className="text-xs text-gray-500 mt-1">12/16 tasks</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-accent-400">
                                <TrendingUp className="w-4 h-4" />
                                <span className="text-sm font-medium">+20% vs yesterday</span>
                            </div>
                        </div>

                        {/* Task List */}
                        <div className="glass-card-light p-6 lg:col-span-2 tilt-on-hover">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-white">Active Tasks</h3>
                                <span className="text-xs text-gray-500 px-3 py-1 rounded-full bg-white/5">8 remaining</span>
                            </div>
                            <div className="space-y-3">
                                {/* Task Item 1 */}
                                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                                    <div className="w-6 h-6 rounded border-2 border-accent-400 flex items-center justify-center group-hover:bg-accent-400/20 transition-all">
                                        <Circle className="w-4 h-4 text-accent-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">Finalize Q4 roadmap presentation</p>
                                        <div className="flex items-center space-x-3 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center">
                                                <Timer className="w-3 h-3 mr-1" />
                                                Due in 3 hours
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-highlight-500/20 text-highlight-400">High Priority</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Task Item 2 */}
                                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-secondary-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                                    <div className="w-6 h-6 rounded border-2 border-secondary-400 flex items-center justify-center group-hover:bg-secondary-400/20 transition-all">
                                        <Circle className="w-4 h-4 text-secondary-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-white group-hover:text-secondary-400 transition-colors">Review design system updates</p>
                                        <div className="flex items-center space-x-3 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center">
                                                <Timer className="w-3 h-3 mr-1" />
                                                Due tomorrow
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary-500/20 text-secondary-400">Medium</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Completed Task */}
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-accent-500/10 border border-accent-500/30">
                                    <div className="w-6 h-6 rounded bg-accent-500 flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-400 line-through">Team standup meeting</p>
                                        <span className="text-xs text-gray-600">Completed 2 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="glass-card-light p-6 group hover:border-primary-400/50 transition-all cursor-pointer">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-400">Productivity Score</span>
                                <TrendingUp className="w-5 h-5 text-primary-400" />
                            </div>
                            <div className="flex items-baseline space-x-2">
                                <span className="text-3xl font-bold text-white">8.7</span>
                                <span className="text-sm text-accent-400">+1.2</span>
                            </div>
                            <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                                <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                            </div>
                        </div>

                        <div className="glass-card-light p-6 group hover:border-secondary-400/50 transition-all cursor-pointer">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-400">Velocity</span>
                                <TrendingUp className="w-5 h-5 text-secondary-400" />
                            </div>
                            <div className="flex items-baseline space-x-2">
                                <span className="text-3xl font-bold text-white">24</span>
                                <span className="text-sm text-gray-500">tasks/week</span>
                            </div>
                            <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                                <div className="bg-gradient-to-r from-secondary-500 to-highlight-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                            </div>
                        </div>

                        <div className="glass-card-light p-6 group hover:border-accent-400/50 transition-all cursor-pointer">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-400">Focus Time</span>
                                <TrendingUp className="w-5 h-5 text-accent-400" />
                            </div>
                            <div className="flex items-baseline space-x-2">
                                <span className="text-3xl font-bold text-white">6.2</span>
                                <span className="text-sm text-gray-500">hrs/day</span>
                            </div>
                            <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                                <div className="bg-gradient-to-r from-accent-500 to-primary-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
