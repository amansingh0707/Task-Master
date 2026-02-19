import { TrendingUp, TrendingDown, Clock, Target, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const PerformanceMetrics = () => {
  // Sample data for the last 7 days
  const weeklyData = [
    { day: 'Mon', completed: 5, timeSpent: 6.5, productivity: 85 },
    { day: 'Tue', completed: 8, timeSpent: 7.2, productivity: 90 },
    { day: 'Wed', completed: 6, timeSpent: 5.8, productivity: 78 },
    { day: 'Thu', completed: 10, timeSpent: 8.5, productivity: 95 },
    { day: 'Fri', completed: 7, timeSpent: 6.0, productivity: 82 },
    { day: 'Sat', completed: 4, timeSpent: 4.2, productivity: 70 },
    { day: 'Sun', completed: 3, timeSpent: 3.5, productivity: 65 },
  ];

  const monthlyData = [
    { week: 'Week 1', completed: 28, avgTime: 6.8 },
    { week: 'Week 2', completed: 32, avgTime: 7.2 },
    { week: 'Week 3', completed: 35, avgTime: 7.5 },
    { week: 'Week 4', completed: 30, avgTime: 6.9 },
  ];

  const metrics = [
    {
      label: 'Weekly Completion',
      value: '43',
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      label: 'Avg. Time/Task',
      value: '2.5h',
      change: '-8%',
      trend: 'down',
      icon: Clock,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      label: 'Productivity Score',
      value: '83%',
      change: '+5%',
      trend: 'up',
      icon: Zap,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <div key={index} className="card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {metric.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendIcon
                      className={`w-4 h-4 ${
                        metric.trend === 'up'
                          ? 'text-green-500'
                          : 'text-red-500'
                      } mr-1`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        metric.trend === 'up'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {metric.change}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                      vs last week
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Completion Trend */}
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Weekly Completion Trend
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#667eea" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#667eea" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
              <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Area
                type="monotone"
                dataKey="completed"
                stroke="#667eea"
                strokeWidth={2}
                fill="url(#colorCompleted)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Productivity Score */}
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Daily Productivity Score
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
              <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Line
                type="monotone"
                dataKey="productivity"
                stroke="#764ba2"
                strokeWidth={3}
                dot={{ fill: '#764ba2', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Overview */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Monthly Overview
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorMonthly" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
            <XAxis dataKey="week" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="completed"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#colorMonthly)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
