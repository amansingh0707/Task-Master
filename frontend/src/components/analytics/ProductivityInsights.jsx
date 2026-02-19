import { Calendar, TrendingUp, Clock, Zap, Target, Award } from 'lucide-react';

const ProductivityInsights = () => {
  const insights = [
    {
      title: 'Most Productive Day',
      value: 'Thursday',
      description: 'You complete 35% more tasks on Thursdays',
      icon: Calendar,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      trend: '+15%',
    },
    {
      title: 'Peak Hours',
      value: '10 AM - 12 PM',
      description: 'Your most productive time window',
      icon: Clock,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      trend: '+22%',
    },
    {
      title: 'Average Task Time',
      value: '2.3 hours',
      description: 'Time to complete a task',
      icon: TrendingUp,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      trend: '-8%',
    },
    {
      title: 'Focus Score',
      value: '87%',
      description: 'Your concentration level this week',
      icon: Zap,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      trend: '+12%',
    },
    {
      title: 'Goal Achievement',
      value: '92%',
      description: 'Weekly goals completed',
      icon: Target,
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30',
      trend: '+5%',
    },
    {
      title: 'Streak',
      value: '14 days',
      description: 'Consecutive days with completed tasks',
      icon: Award,
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      trend: 'New Record!',
    },
  ];

  const distractionAnalysis = {
    lowDistraction: 68,
    mediumDistraction: 22,
    highDistraction: 10,
  };

  return (
    <div className="space-y-6">
      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className="card p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${insight.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                  {insight.trend}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {insight.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {insight.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {insight.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Distraction Analysis */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
          Distraction Analysis
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Low Distraction
              </span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                {distractionAnalysis.lowDistraction}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${distractionAnalysis.lowDistraction}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Medium Distraction
              </span>
              <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
                {distractionAnalysis.mediumDistraction}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${distractionAnalysis.mediumDistraction}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                High Distraction
              </span>
              <span className="text-sm font-bold text-red-600 dark:text-red-400">
                {distractionAnalysis.highDistraction}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${distractionAnalysis.highDistraction}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>💡 Tip:</strong> You're most focused during morning hours. Schedule complex tasks between 10 AM - 12 PM for optimal productivity.
          </p>
        </div>
      </div>

      {/* Task Completion Time Distribution */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
          Task Completion Time Stats
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">45%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">&lt; 1 hour</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">30%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">1-3 hours</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">18%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">3-6 hours</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-3xl font-bold text-red-600 dark:text-red-400">7%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">&gt; 6 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityInsights;
