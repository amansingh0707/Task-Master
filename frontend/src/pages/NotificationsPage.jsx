import { useState } from 'react';
import { Bell, CheckCircle2, Clock, AlertCircle, UserPlus, FileText, Tag, Check, X, Filter } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const NotificationsPage = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'task_completed',
      title: 'Task Completed',
      message: 'You completed "Design Dashboard UI"',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: false,
      icon: CheckCircle2,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      id: 2,
      type: 'task_assigned',
      title: 'New Task Assigned',
      message: 'Sarah assigned you "API Integration"',
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      read: false,
      icon: FileText,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 3,
      type: 'deadline_approaching',
      title: 'Deadline Approaching',
      message: 'Task "Database Migration" is due in 2 hours',
      timestamp: new Date(Date.now() - 1000 * 60 * 180),
      read: true,
      icon: Clock,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      id: 4,
      type: 'team_update',
      title: 'Team Update',
      message: 'John joined your workspace "Development Team"',
      timestamp: new Date(Date.now() - 1000 * 60 * 240),
      read: true,
      icon: UserPlus,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      id: 5,
      type: 'mention',
      title: 'You were mentioned',
      message: '@You in task "Weekly Planning"',
      timestamp: new Date(Date.now() - 1000 * 60 * 360),
      read: false,
      icon: Tag,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    },
    {
      id: 6,
      type: 'overdue',
      title: 'Task Overdue',
      message: 'Task "Client Presentation" is now overdue',
      timestamp: new Date(Date.now() - 1000 * 60 * 480),
      read: true,
      icon: AlertCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
    },
  ]);

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'tasks', label: 'Tasks', count: notifications.filter(n => n.type.includes('task')).length },
    { id: 'team', label: 'Team', count: notifications.filter(n => n.type.includes('team') || n.type === 'mention').length },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    if (filter === 'tasks') return notification.type.includes('task') || notification.type === 'deadline_approaching' || notification.type === 'overdue';
    if (filter === 'team') return notification.type.includes('team') || notification.type === 'mention';
    return true;
  });

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 p-8 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">
                Notifications 🔔
              </h1>
              <p className="text-white/90 text-lg">
                Stay updated with your tasks and team
              </p>
            </div>
            <button
              onClick={markAllAsRead}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-xl transition-all"
            >
              <Check className="w-5 h-5 mr-2 inline" />
              Mark all as read
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === f.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {f.label}
              {f.count > 0 && (
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  filter === f.id
                    ? 'bg-white/20'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  {f.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="card p-6">
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`group p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    notification.read
                      ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                      : 'border-primary-300 dark:border-primary-600 bg-primary-50/50 dark:bg-primary-900/10'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${notification.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${notification.color}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                          {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {notification.message}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex-shrink-0 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-2 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 transition-colors"
                          title="Mark as read"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No notifications
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              You're all caught up! Check back later for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
