import { LayoutDashboard, Kanban, FileText, Sparkles } from 'lucide-react';

const ProductShowcase = () => {
  const showcases = [
    {
      icon: LayoutDashboard,
      title: 'Intuitive Dashboard',
      subtitle: 'Get a bird\'s eye view of all your tasks',
      features: ['Task statistics at a glance', 'Quick actions', 'Recent activities', 'Progress tracking'],
      image: 'dashboard',
      reverse: false,
    },
    {
      icon: Kanban,
      title: 'Kanban Board View',
      subtitle: 'Visualize your workflow',
      features: ['Drag tasks between columns', 'Color-coded priorities', 'Custom columns', 'Real-time updates'],
      image: 'kanban',
      reverse: true,
    },
    {
      icon: FileText,
      title: 'Detailed Task View',
      subtitle: 'Never miss the details',
      features: ['Subtasks and checklists', 'Comments and notes', 'File attachments', 'Due date reminders'],
      image: 'task-details',
      reverse: false,
    },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/10 to-purple-300/10 dark:from-blue-700/5 dark:to-purple-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/10 to-orange-300/10 dark:from-pink-700/5 dark:to-orange-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-6">
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            Powerful Features,
            <span className="block mt-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-purple-600 bg-clip-text text-transparent">
              Beautiful Design
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Experience the perfect blend of functionality and aesthetics
          </p>
        </div>

        {/* Showcases */}
        <div className="space-y-40">
          {showcases.map((showcase, index) => {
            const Icon = showcase.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${showcase.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-20`}
              >
                {/* Content */}
                <div className="flex-1 space-y-8 animate-slide-up">
                  {/* Icon Badge */}
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl blur-xl opacity-50"></div>
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-2xl hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Title & Subtitle */}
                  <div className="space-y-3">
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                      {showcase.title}
                    </h3>
                    <p className="text-2xl text-primary-600 dark:text-primary-400 font-bold">
                      {showcase.subtitle}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-5">
                    {showcase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-lg font-medium leading-relaxed group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <div className="pt-4">
                    <button className="group inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold text-lg hover:space-x-3 transition-all">
                      <span>Explore this feature</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Mockup - Enhanced */}
                <div className="flex-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary-400 via-secondary-400 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    
                    {/* Glass Container */}
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl border-2 border-gray-200/50 dark:border-gray-700/50 p-4 rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-500">
                      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl aspect-video flex items-center justify-center overflow-hidden relative">
                        {/* Animated Background Grid */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="grid grid-cols-6 grid-rows-4 h-full w-full gap-3 p-4">
                            {[...Array(24)].map((_, i) => (
                              <div 
                                key={i} 
                                className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg animate-pulse"
                                style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative text-center space-y-6 p-8 z-10">
                          <div className="relative inline-flex">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                            <Icon className="relative w-20 h-20 text-primary-400 mx-auto animate-float" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-white text-2xl font-bold">{showcase.title}</p>
                            <p className="text-gray-400 text-base">Beautiful, intuitive interface</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
