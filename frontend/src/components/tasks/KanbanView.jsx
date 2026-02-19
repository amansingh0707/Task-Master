import { useState } from 'react';
import { MoreVertical, Plus, Clock, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

const KanbanView = ({ tasks = [] }) => {
  const [draggedTask, setDraggedTask] = useState(null);

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-gray-500', count: 0 },
    { id: 'in_progress', title: 'In Progress', color: 'bg-blue-500', count: 0 },
    { id: 'review', title: 'Review', color: 'bg-yellow-500', count: 0 },
    { id: 'completed', title: 'Completed', color: 'bg-green-500', count: 0 },
  ];

  // Sample tasks if none provided
  const defaultTasks = [
    {
      id: 1,
      title: 'Design Dashboard UI',
      description: 'Create modern dashboard interface',
      status: 'in_progress',
      priority: 'high',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
      tags: ['Design', 'UI/UX'],
    },
    {
      id: 2,
      title: 'API Integration',
      description: 'Integrate REST API endpoints',
      status: 'todo',
      priority: 'urgent',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      tags: ['Development', 'Backend'],
    },
    {
      id: 3,
      title: 'Code Review',
      description: 'Review pull requests',
      status: 'review',
      priority: 'medium',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 12),
      tags: ['Development'],
    },
    {
      id: 4,
      title: 'Update Documentation',
      description: 'Update API documentation',
      status: 'completed',
      priority: 'low',
      dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
      tags: ['Documentation'],
    },
    {
      id: 5,
      title: 'Bug Fixes',
      description: 'Fix reported bugs',
      status: 'in_progress',
      priority: 'high',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 48),
      tags: ['Development', 'Bug'],
    },
  ];

  const displayTasks = tasks.length > 0 ? tasks : defaultTasks;

  const getTasksByStatus = (status) => {
    return displayTasks.filter((task) => task.status === status);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'border-l-4 border-red-500';
      case 'high':
        return 'border-l-4 border-orange-500';
      case 'medium':
        return 'border-l-4 border-yellow-500';
      default:
        return 'border-l-4 border-blue-500';
    }
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (status) => {
    if (draggedTask) {
      // Update task status logic here
      console.log(`Moving task ${draggedTask.id} to ${status}`);
      setDraggedTask(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => {
        const columnTasks = getTasksByStatus(column.id);
        return (
          <div
            key={column.id}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {column.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                  {columnTasks.length}
                </span>
              </div>
              <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Tasks */}
            <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
              {columnTasks.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => handleDragStart(task)}
                  className={`card p-4 cursor-move hover:shadow-lg transition-all duration-300 ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {task.title}
                    </h4>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {task.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      {task.description}
                    </p>
                  )}

                  {task.dueDate && (
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <Clock className="w-3 h-3 mr-1" />
                      {format(task.dueDate, 'MMM dd, HH:mm')}
                    </div>
                  )}

                  {task.tags && task.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {task.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
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
                    {task.priority === 'urgent' && (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>
              ))}

              {columnTasks.length === 0 && (
                <div className="text-center py-8 text-gray-400 dark:text-gray-600">
                  <p className="text-sm">No tasks</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanView;
