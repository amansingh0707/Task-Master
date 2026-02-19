import { useState } from 'react';
import {
  User,
  Bell,
  Palette,
  Shield,
  Zap,
  Cloud,
  Smartphone,
  Mail,
  Calendar,
  MessageSquare,
  FileText,
  Globe,
  Save,
} from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      desktop: false,
      taskReminders: true,
      deadlineAlerts: true,
      teamUpdates: false,
    },
    theme: 'system',
    language: 'en',
    timezone: 'UTC',
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Cloud },
    { id: 'automation', label: 'Automation', icon: Zap },
  ];

  const integrations = [
    {
      id: 'google',
      name: 'Google Calendar',
      description: 'Sync your tasks with Google Calendar',
      icon: Calendar,
      connected: false,
      color: 'text-blue-600',
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Get task notifications in Slack',
      icon: MessageSquare,
      connected: true,
      color: 'text-purple-600',
    },
    {
      id: 'notion',
      name: 'Notion',
      description: 'Export tasks to Notion workspace',
      icon: FileText,
      connected: false,
      color: 'text-gray-800 dark:text-gray-200',
    },
    {
      id: 'outlook',
      name: 'Microsoft Outlook',
      description: 'Sync with Outlook calendar and email',
      icon: Mail,
      connected: false,
      color: 'text-blue-500',
    },
  ];

  const automationRules = [
    {
      id: 1,
      title: 'Auto-archive completed tasks',
      description: 'Automatically archive tasks 7 days after completion',
      enabled: true,
    },
    {
      id: 2,
      title: 'Email to Task',
      description: 'Convert emails from specific addresses to tasks',
      enabled: true,
    },
    {
      id: 3,
      title: 'Smart scheduling',
      description: 'Automatically schedule tasks based on priority and deadlines',
      enabled: false,
    },
    {
      id: 4,
      title: 'Meeting notes to tasks',
      description: 'Extract action items from meeting notes',
      enabled: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 p-8 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-black mb-2">
            Settings ⚙️
          </h1>
          <p className="text-white/90 text-lg">
            Customize your Task Master experience
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="card p-2 space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="card p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Profile Settings
              </h2>
              
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <div>
                  <button className="btn-primary mb-2">Change Photo</button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    JPG, GIF or PNG. Max size of 800KB
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="John Doe"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="john@example.com"
                    defaultValue="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Product Manager"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timezone
                  </label>
                  <select className="input-field">
                    <option>UTC</option>
                    <option>EST</option>
                    <option>PST</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn-primary flex items-center">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="card p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Notification Preferences
              </h2>

              <div className="space-y-4">
                {[
                  { key: 'email', label: 'Email Notifications', description: 'Receive notifications via email' },
                  { key: 'push', label: 'Push Notifications', description: 'Receive push notifications on mobile' },
                  { key: 'desktop', label: 'Desktop Notifications', description: 'Show desktop notifications' },
                  { key: 'taskReminders', label: 'Task Reminders', description: 'Get reminded about upcoming tasks' },
                  { key: 'deadlineAlerts', label: 'Deadline Alerts', description: 'Alert me when deadlines approach' },
                  { key: 'teamUpdates', label: 'Team Updates', description: 'Notify about team activity' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={settings.notifications[item.key]}
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="card p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Appearance
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['light', 'dark', 'system'].map((theme) => (
                    <button
                      key={theme}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        settings.theme === theme
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 dark:text-white capitalize">
                          {theme}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Language
                </label>
                <select className="input-field max-w-xs">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {activeTab === 'integrations' && (
            <div className="card p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Integrations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration) => {
                  const Icon = integration.icon;
                  return (
                    <div
                      key={integration.id}
                      className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${integration.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        {integration.connected && (
                          <span className="px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                            Connected
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {integration.description}
                      </p>
                      <button
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                          integration.connected
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200'
                            : 'bg-primary-500 text-white hover:bg-primary-600'
                        }`}
                      >
                        {integration.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Automation Tab */}
          {activeTab === 'automation' && (
            <div className="card p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Automation Rules
                </h2>
                <button className="btn-primary">
                  <Zap className="w-4 h-4 mr-2" />
                  Create Rule
                </button>
              </div>

              <div className="space-y-4">
                {automationRules.map((rule) => (
                  <div
                    key={rule.id}
                    className="flex items-start justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {rule.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {rule.description}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={rule.enabled}
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
