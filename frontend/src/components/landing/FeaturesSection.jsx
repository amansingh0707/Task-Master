import { Sparkles, LayoutGrid, Activity, Users, Bell, BarChart3 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0, color = 'primary' }) => {
    const colorClasses = {
        primary: 'text-primary-400 bg-primary-500/10 group-hover:shadow-glow',
        secondary: 'text-secondary-400 bg-secondary-500/10 group-hover:shadow-glow-cyan',
        accent: 'text-accent-400 bg-accent-500/10 group-hover:shadow-glow-green',
        highlight: 'text-highlight-400 bg-highlight-500/10 group-hover:shadow-glow-pink',
    };

    return (
        <div
            className="glass-card-floating feature-card group p-8 h-full"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className={`w-16 h-16 rounded-2xl ${colorClasses[color]} flex items-center justify-center mb-6 transition-all duration-500 feature-icon`}>
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 group-hover:bg-clip-text transition-all duration-300">
                {title}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {description}
            </p>
            <div className="mt-6 flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: Sparkles,
            title: 'Smart Task Prioritization',
            description: 'Dynamically surfaces what needs attention right now with intelligent algorithms that adapt to your workflow patterns.',
            color: 'primary',
            delay: 0,
        },
        {
            icon: LayoutGrid,
            title: 'Flexible Task Views',
            description: 'Instantly switch between List, Kanban, and Timeline layouts to match your thinking style and project needs.',
            color: 'secondary',
            delay: 0.1,
        },
        {
            icon: Activity,
            title: 'Real-Time Progress Tracking',
            description: 'Visual feedback that updates as work moves forward, keeping everyone aligned on project momentum.',
            color: 'accent',
            delay: 0.2,
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description: 'Comments, assignments, and updates in one shared flow. Work together without context switching.',
            color: 'highlight',
            delay: 0.3,
        },
        {
            icon: Bell,
            title: 'Deadlines & Reminders',
            description: 'Soft alerts that guide—not interrupt—your focus. Stay on track without feeling overwhelmed.',
            color: 'primary',
            delay: 0.4,
        },
        {
            icon: BarChart3,
            title: 'Productivity Insights',
            description: 'Clear, visual analytics that reveal how work actually gets done and where to optimize.',
            color: 'secondary',
            delay: 0.5,
        },
    ];

    return (
        <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-glow-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Built for{' '}
                        <span className="gradient-text">Focus & Flow</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to organize work, prioritize what matters, and move forward with clarity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
