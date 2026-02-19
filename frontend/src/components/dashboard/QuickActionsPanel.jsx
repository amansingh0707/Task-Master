import { Plus, Clock, Search, FileText, Target, Zap, Calendar, Users } from 'lucide-react';

const QuickActionsPanel = ({ onAction }) => {
  const quickActions = [
    {
      id: 'create-task',
      label: 'New Task',
      icon: Plus,
      gradient: 'from-blue-500 to-cyan-500',
      action: 'createTask',
    },
    {
      id: 'start-timer',
      label: 'Start Timer',
      icon: Clock,
      gradient: 'from-purple-500 to-pink-500',
      action: 'startTimer',
    },
    {
      id: 'quick-search',
      label: 'Quick Search',
      icon: Search,
      gradient: 'from-green-500 to-emerald-500',
      action: 'quickSearch',
    },
    {
      id: 'add-note',
      label: 'Add Note',
      icon: FileText,
      gradient: 'from-orange-500 to-red-500',
      action: 'addNote',
    },
    {
      id: 'set-goal',
      label: 'Set Goal',
      icon: Target,
      gradient: 'from-yellow-500 to-orange-500',
      action: 'setGoal',
    },
    {
      id: 'focus-mode',
      label: 'Focus Mode',
      icon: Zap,
      gradient: 'from-indigo-500 to-purple-500',
      action: 'focusMode',
    },
    {
      id: 'schedule',
      label: 'Schedule',
      icon: Calendar,
      gradient: 'from-pink-500 to-rose-500',
      action: 'schedule',
    },
    {
      id: 'collaborate',
      label: 'Collaborate',
      icon: Users,
      gradient: 'from-teal-500 to-cyan-500',
      action: 'collaborate',
    },
  ];

  const handleAction = (action) => {
    if (onAction) {
      onAction(action);
    }
  };

  return (
    <div className="card p-3">
      <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
        <Zap className="w-3.5 h-3.5 mr-1.5 text-primary-500" />
        Quick Actions
      </h2>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => handleAction(action.action)}
              className="group relative overflow-hidden rounded-md p-1.5 bg-gray-50 dark:bg-gray-700/40 hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-200 cursor-pointer"
              title={action.label}
            >
              {/* Content */}
              <div className="relative flex flex-col items-center text-center space-y-0.5">
                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${action.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300 leading-tight truncate w-full">
                  {action.label.split(' ')[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionsPanel;
