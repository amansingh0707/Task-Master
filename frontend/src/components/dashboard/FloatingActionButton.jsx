import { useState } from 'react';
import { Plus, X, FileText, Clock, Calendar, Users, Target, Zap } from 'lucide-react';

const FloatingActionButton = ({ onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      id: 'task',
      label: 'New Task',
      icon: FileText,
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 'timer',
      label: 'Start Timer',
      icon: Clock,
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      id: 'event',
      label: 'Schedule Event',
      icon: Calendar,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      id: 'meeting',
      label: 'Team Meeting',
      icon: Users,
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      id: 'goal',
      label: 'Set Goal',
      icon: Target,
      color: 'bg-pink-500 hover:bg-pink-600',
    },
    {
      id: 'focus',
      label: 'Focus Mode',
      icon: Zap,
      color: 'bg-indigo-500 hover:bg-indigo-600',
    },
  ];

  const handleActionClick = (actionId) => {
    if (onAction) {
      onAction(actionId);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Action Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 space-y-3 mb-2 animate-slide-up">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={action.id}
                className="flex items-center justify-end space-x-3 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {action.label}
                </span>
                <button
                  onClick={() => handleActionClick(action.id)}
                  className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                >
                  <Icon className="w-6 h-6" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
      </button>

      {/* Ripple effect */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default FloatingActionButton;
