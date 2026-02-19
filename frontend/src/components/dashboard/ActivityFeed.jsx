import { Bell, CheckCircle2, Clock, AlertCircle, UserPlus, FileText, Tag } from 'lucide-react';
import { formatDistanceToNow, isValid, parseISO } from 'date-fns';

const ActivityFeed = ({ activities = [] }) => {
  const defaultActivities = [
    {
      id: 1,
      type: 'task_completed',
      message: 'You completed "Design Dashboard UI"',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      icon: CheckCircle2,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      id: 2,
      type: 'task_created',
      message: 'New task "Implement Analytics" was created',
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      icon: FileText,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 3,
      type: 'deadline_approaching',
      message: 'Deadline approaching for "API Integration"',
      timestamp: new Date(Date.now() - 1000 * 60 * 180),
      icon: Clock,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      id: 4,
      type: 'team_update',
      message: 'Sarah joined your workspace',
      timestamp: new Date(Date.now() - 1000 * 60 * 240),
      icon: UserPlus,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      id: 5,
      type: 'tag_added',
      message: 'Tag "Priority" added to 3 tasks',
      timestamp: new Date(Date.now() - 1000 * 60 * 360),
      icon: Tag,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    },
    {
      id: 6,
      type: 'overdue',
      message: 'Task "Database Migration" is now overdue',
      timestamp: new Date(Date.now() - 1000 * 60 * 480),
      icon: AlertCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
    },
  ];

  const displayActivities = activities.length > 0 ? activities : defaultActivities;

  const getValidDate = (dateValue) => {
    if (!dateValue) return null;
    
    // If it's already a Date object
    if (dateValue instanceof Date) {
      return isValid(dateValue) ? dateValue : null;
    }
    
    // If it's a string, try to parse it
    if (typeof dateValue === 'string') {
      const parsed = parseISO(dateValue);
      return isValid(parsed) ? parsed : null;
    }
    
    return null;
  };

  return (
    <div className="card p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <Bell className="w-5 h-5 mr-2 text-primary-500" />
          Activity Feed
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Last 24 hours
        </span>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {displayActivities.map((activity) => {
          const Icon = activity.icon;
          const validTimestamp = getValidDate(activity.timestamp);
          
          return (
            <div
              key={activity.id || activity._id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full ${activity.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {validTimestamp 
                    ? formatDistanceToNow(validTimestamp, { addSuffix: true })
                    : 'Recently'
                  }
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors">
        View All Activity
      </button>
    </div>
  );
};

export default ActivityFeed;
