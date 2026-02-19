import { Eye, Clock, Tag, AlertCircle } from 'lucide-react';
import { formatDistanceToNow, isValid, parseISO } from 'date-fns';

const RecentlyViewed = ({ tasks = [] }) => {
  const defaultTasks = [
    {
      id: 1,
      title: 'Design System Documentation',
      viewedAt: new Date(Date.now() - 1000 * 60 * 15),
      status: 'in_progress',
      priority: 'high',
      tags: ['Design', 'Documentation'],
    },
    {
      id: 2,
      title: 'API Integration Testing',
      viewedAt: new Date(Date.now() - 1000 * 60 * 45),
      status: 'todo',
      priority: 'urgent',
      tags: ['Development', 'Testing'],
    },
    {
      id: 3,
      title: 'User Feedback Analysis',
      viewedAt: new Date(Date.now() - 1000 * 60 * 120),
      status: 'in_progress',
      priority: 'medium',
      tags: ['Research', 'UX'],
    },
    {
      id: 4,
      title: 'Sprint Planning Meeting',
      viewedAt: new Date(Date.now() - 1000 * 60 * 180),
      status: 'completed',
      priority: 'high',
      tags: ['Meeting', 'Planning'],
    },
  ];

  const displayTasks = tasks.length > 0 ? tasks : defaultTasks;

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'in_progress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'todo':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
    }
  };

  const getPriorityIcon = (priority) => {
    if (priority === 'urgent' || priority === 'high') {
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <Eye className="w-5 h-5 mr-2 text-primary-500" />
          Recently Viewed
        </h2>
      </div>

      <div className="space-y-3">
        {displayTasks.map((task) => {
          // Safely parse and validate the date
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

          const viewedDate = getValidDate(task.viewedAt);
          
          return (
            <div
              key={task.id || task._id}
              className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {task.title}
                    </h3>
                    {getPriorityIcon(task.priority)}
                  </div>
                  
                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>
                      {viewedDate 
                        ? `Viewed ${formatDistanceToNow(viewedDate, { addSuffix: true })}`
                        : 'Recently viewed'
                      }
                    </span>
                  </div>
                </div>
              
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                {task.status.replace('_', ' ')}
              </span>
            </div>

            {task.tags && task.tags.length > 0 && (
              <div className="flex items-center space-x-2 mt-2">
                <Tag className="w-3 h-3 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {task.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlyViewed;
