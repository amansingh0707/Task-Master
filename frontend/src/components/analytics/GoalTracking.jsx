import { Target, TrendingUp, Calendar, Award, Flame } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GoalTracking = () => {
  const goals = [
    {
      id: 1,
      title: 'Complete 50 tasks this month',
      current: 43,
      target: 50,
      percentage: 86,
      deadline: '5 days left',
      color: '#667eea',
      status: 'on-track',
    },
    {
      id: 2,
      title: 'Maintain 7-day streak',
      current: 14,
      target: 7,
      percentage: 100,
      deadline: 'Achieved!',
      color: '#10b981',
      status: 'achieved',
    },
    {
      id: 3,
      title: 'Reduce avg task time to 2hrs',
      current: 2.3,
      target: 2.0,
      percentage: 87,
      deadline: '12 days left',
      color: '#f59e0b',
      status: 'on-track',
    },
    {
      id: 4,
      title: 'Zero overdue tasks',
      current: 2,
      target: 0,
      percentage: 60,
      deadline: '15 days left',
      color: '#ef4444',
      status: 'at-risk',
    },
  ];

  const weeklyProgress = [
    { day: 'Mon', completed: 8, target: 7 },
    { day: 'Tue', completed: 6, target: 7 },
    { day: 'Wed', completed: 9, target: 7 },
    { day: 'Thu', completed: 7, target: 7 },
    { day: 'Fri', completed: 5, target: 7 },
    { day: 'Sat', completed: 4, target: 7 },
    { day: 'Sun', completed: 3, target: 7 },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'achieved':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'on-track':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'at-risk':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="card p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(goal.status)}`}>
                {goal.status.replace('-', ' ')}
              </div>
              <Target className="w-5 h-5 text-gray-400" />
            </div>
            
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">
              {goal.title}
            </h3>
            
            <div className="w-24 h-24 mx-auto mb-4">
              <CircularProgressbar
                value={goal.percentage}
                text={`${goal.percentage}%`}
                styles={buildStyles({
                  textSize: '24px',
                  pathColor: goal.color,
                  textColor: goal.color,
                  trailColor: '#e5e7eb',
                })}
              />
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {goal.current} / {goal.target}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {goal.deadline}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Progress Chart */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-primary-500" />
          Weekly Goal Progress
        </h3>
        <div className="grid grid-cols-7 gap-3">
          {weeklyProgress.map((day, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                {day.day}
              </div>
              <div className="relative h-32 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div
                  className={`absolute bottom-0 w-full transition-all duration-500 ${
                    day.completed >= day.target
                      ? 'bg-gradient-to-t from-green-500 to-green-400'
                      : 'bg-gradient-to-t from-blue-500 to-blue-400'
                  }`}
                  style={{ height: `${Math.min((day.completed / day.target) * 100, 100)}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                    {day.completed}
                  </span>
                </div>
                {/* Target line */}
                <div className="absolute left-0 right-0 border-t-2 border-dashed border-red-400" style={{ top: `${100 - (day.target / 10) * 100}%` }}></div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                Goal: {day.target}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements and Streaks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-yellow-500" />
            Recent Achievements
          </h3>
          <div className="space-y-3">
            {[
              { title: 'Speed Demon', description: 'Completed 10 tasks in one day', icon: '⚡', date: '2 days ago' },
              { title: 'Consistency King', description: '14-day completion streak', icon: '🔥', date: '4 days ago' },
              { title: 'Early Bird', description: 'Completed 20 tasks before noon', icon: '🌅', date: '1 week ago' },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="text-3xl mr-3">{achievement.icon}</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {achievement.title}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {achievement.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Flame className="w-5 h-5 mr-2 text-orange-500" />
            Streak Counter
          </h3>
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-xl mb-4">
              <div className="text-center">
                <p className="text-4xl font-black text-white">14</p>
                <p className="text-sm text-white/90">days</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Current Streak - Personal Best! 🎉
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Keep it going! Complete at least 1 task today.
            </p>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 14 }).map((_, index) => (
              <div
                key={index}
                className="w-full aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-md"
                title={`Day ${index + 1}`}
              ></div>
            ))}
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-md opacity-30"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalTracking;
