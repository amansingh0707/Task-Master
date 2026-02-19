import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ListTodo, 
  BarChart3, 
  User,
  Bell,
  Settings,
  Users,
  Zap
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', section: 'main' },
    { path: '/tasks', icon: ListTodo, label: 'Tasks', section: 'main' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', section: 'main' },
    { path: '/notifications', icon: Bell, label: 'Notifications', section: 'tools' },
    { path: '/teams', icon: Users, label: 'Teams', section: 'tools' },
    { path: '/profile', icon: User, label: 'Profile', section: 'settings' },
    { path: '/settings', icon: Settings, label: 'Settings', section: 'settings' },
  ];

  const mainItems = menuItems.filter(item => item.section === 'main');
  const toolsItems = menuItems.filter(item => item.section === 'tools');
  const settingsItems = menuItems.filter(item => item.section === 'settings');

  const isActive = (path) => location.pathname === path;

  const renderMenuItem = (item) => {
    const Icon = item.icon;
    const active = isActive(item.path);

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group ${
          active
            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <Icon className={`w-5 h-5 ${
          active ? '' : 'group-hover:scale-110 transition-transform'
        }`} />
        <span className="font-medium">{item.label}</span>
        {item.path === '/notifications' && (
          <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            3
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-4rem)] sticky top-16">
      <nav className="flex-1 p-4 overflow-y-auto">
        {/* Main Section */}
        <div className="mb-6">
          <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Main
          </h3>
          <div className="space-y-1">
            {mainItems.map(renderMenuItem)}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-6">
          <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Collaboration
          </h3>
          <div className="space-y-1">
            {toolsItems.map(renderMenuItem)}
          </div>
        </div>

        {/* Settings Section */}
        <div>
          <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Account
          </h3>
          <div className="space-y-1">
            {settingsItems.map(renderMenuItem)}
          </div>
        </div>
      </nav>

      {/* Quick Actions at Bottom */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
          <Zap className="w-5 h-5" />
          <span>Focus Mode</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
