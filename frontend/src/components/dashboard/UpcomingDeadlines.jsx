import { Calendar, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { format, differenceInDays, isPast, isToday, isTomorrow, isValid, parseISO } from 'date-fns';

const UpcomingDeadlines = ({ tasks = [] }) => {
  // Sample tasks if none provided
  const defaultTasks = [
    {
      id: 1,
      title: 'Complete Dashboard Design',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 6),
      priority: 'urgent',
      status: 'in_progress',
    },
    {
      id: 2,
      title: 'Review Pull Requests',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      priority: 'high',
      status: 'todo',
    },
    {
      id: 3,
      title: 'Client Meeting Prep',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 48),
      priority: 'high',
      status: 'in_progress',
    },
    {
      id: 4,
      title: 'Update Documentation',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 72),
      priority: 'medium',
      status: 'todo',
    },
    {
      id: 5,
      title: 'Team Retrospective',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 120),
      priority: 'low',
      status: 'todo',
    },
  ];

  const displayTasks = tasks.length > 0 ? tasks : defaultTasks;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      case 'high':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      default:
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
    }
  };

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

  const getTimeStatus = (dueDate) => {
    const validDate = getValidDate(dueDate);
    
    if (!validDate) {
      return {
        label: 'No due date',
        color: 'text-gray-500 dark:text-gray-400',
        icon: Calendar,
      };
    }
    
    if (isPast(validDate)) {
      return {
        label: 'Overdue',
        color: 'text-red-600 dark:text-red-400',
        icon: AlertCircle,
      };
    }
    if (isToday(validDate)) {
      return {
        label: 'Due Today',
        color: 'text-orange-600 dark:text-orange-400',
        icon: Clock,
      };
    }
    if (isTomorrow(validDate)) {
      return {
        label: 'Due Tomorrow',
        color: 'text-yellow-600 dark:text-yellow-400',
        icon: Calendar,
      };
    }
    
    const daysLeft = differenceInDays(validDate, new Date());
    return {
      label: `${daysLeft} days left`,
      color: 'text-gray-600 dark:text-gray-400',
      icon: Calendar,
    };
  };

  return (
    <div className="card p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-primary-500" />
          Upcoming Deadlines
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Next 7 days
        </span>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {displayTasks.map((task) => {
          const timeStatus = getTimeStatus(task.dueDate);
          const StatusIcon = timeStatus.icon;
          const validDueDate = getValidDate(task.dueDate);
          
          return (
            <div
              key={task.id || task._id}
              className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white dark:bg-gray-800"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {task.title}
                </h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className={`flex items-center text-sm ${timeStatus.color} font-medium`}>
                  <StatusIcon className="w-4 h-4 mr-1" />
                  {timeStatus.label}
                </div>
                {validDueDate && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {format(validDueDate, 'MMM dd, HH:mm')}
                  </span>
                )}
              </div>

              {/* Progress indicator */}
              <div className="mt-3">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${
                      task.status === 'completed'
                        ? 'bg-green-500'
                        : task.status === 'in_progress'
                        ? 'bg-blue-500'
                        : 'bg-gray-400'
                    }`}
                    style={{
                      width:
                        task.status === 'completed'
                          ? '100%'
                          : task.status === 'in_progress'
                          ? '60%'
                          : '0%',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors">
          View All Tasks
        </button>
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
