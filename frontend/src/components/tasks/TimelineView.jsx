import { Clock, CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { format, isToday, isTomorrow, isPast } from 'date-fns';

const TimelineView = ({ tasks = [] }) => {
  // Sample tasks if none provided
  const defaultTasks = [
    {
      id: 1,
      title: 'Morning Standup',
      description: 'Daily team sync',
      dueDate: new Date(Date.now() - 1000 * 60 * 60 * 2),
      status: 'completed',
      priority: 'medium',
    },
    {
      id: 2,
      title: 'Design Review',
      description: 'Review new dashboard designs',
      dueDate: new Date(),
      status: 'in_progress',
      priority: 'high',
    },
    {
      id: 3,
      title: 'Code Implementation',
      description: 'Implement new features',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 4),
      status: 'todo',
      priority: 'urgent',
    },
    {
      id: 4,
      title: 'Client Meeting',
      description: 'Discuss project requirements',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      status: 'todo',
      priority: 'high',
    },
    {
      id: 5,
      title: 'Documentation',
      description: 'Update API documentation',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 48),
      status: 'todo',
      priority: 'low',
    },
  ];

  const displayTasks = tasks.length > 0 ? tasks : defaultTasks;

  // Sort tasks by due date
  const sortedTasks = [...displayTasks].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'in_progress':
        return <Clock className="w-6 h-6 text-blue-500" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getTimeLabel = (dueDate) => {
    if (isPast(dueDate) && !isToday(dueDate)) {
      return { label: 'Overdue', color: 'text-red-600 dark:text-red-400' };
    }
    if (isToday(dueDate)) {
      return { label: 'Today', color: 'text-blue-600 dark:text-blue-400' };
    }
    if (isTomorrow(dueDate)) {
      return { label: 'Tomorrow', color: 'text-green-600 dark:text-green-400' };
    }
    return { label: format(dueDate, 'MMM dd'), color: 'text-gray-600 dark:text-gray-400' };
  };

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Task Timeline
      </h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-purple-600"></div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {sortedTasks.map((task, index) => {
            const timeInfo = getTimeLabel(task.dueDate);
            return (
              <div key={task.id} className="relative pl-16">
                {/* Timeline Node */}
                <div className="absolute left-3 top-1 bg-white dark:bg-gray-900 rounded-full p-1 border-4 border-gray-100 dark:border-gray-800">
                  {getStatusIcon(task.status)}
                </div>

                {/* Task Card */}
                <div className="card p-5 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {task.title}
                        </h4>
                        {isPast(task.dueDate) && task.status !== 'completed' && (
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      {task.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {task.description}
                        </p>
                      )}
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        task.priority === 'urgent'
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : task.priority === 'high'
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                          : task.priority === 'medium'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center text-sm font-medium ${timeInfo.color}`}>
                        <Clock className="w-4 h-4 mr-1" />
                        {timeInfo.label}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {format(task.dueDate, 'HH:mm')}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        task.status === 'completed'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : task.status === 'in_progress'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'
                      }`}
                    >
                      {task.status.replace('_', ' ')}
                    </span>
                  </div>

                  {/* Progress bar for in-progress tasks */}
                  {task.status === 'in_progress' && (
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineView;
