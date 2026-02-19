import { useState } from 'react';
import { Users, UserPlus, Crown, Shield, Mail, MoreVertical, MessageSquare, CheckCircle, Clock, Target } from 'lucide-react';

const TeamsPage = () => {
  const [activeTab, setActiveTab] = useState('members');

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Owner',
      avatar: 'JD',
      status: 'online',
      tasksCompleted: 45,
      tasksInProgress: 8,
      joinedDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      role: 'Admin',
      avatar: 'SS',
      status: 'online',
      tasksCompleted: 38,
      tasksInProgress: 12,
      joinedDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'Member',
      avatar: 'MJ',
      status: 'away',
      tasksCompleted: 29,
      tasksInProgress: 5,
      joinedDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      role: 'Member',
      avatar: 'ED',
      status: 'offline',
      tasksCompleted: 33,
      tasksInProgress: 7,
      joinedDate: '2023-03-25',
    },
  ];

  const sharedBoards = [
    {
      id: 1,
      name: 'Product Development',
      description: 'Main product development board',
      members: 4,
      tasks: 23,
      completed: 15,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      name: 'Marketing Campaign',
      description: 'Q2 marketing initiatives',
      members: 3,
      tasks: 18,
      completed: 12,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      name: 'Design Sprint',
      description: 'UI/UX design projects',
      members: 2,
      tasks: 15,
      completed: 10,
      color: 'from-green-500 to-teal-500',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Sarah Smith',
      action: 'completed task',
      task: 'API Integration',
      time: '5 minutes ago',
    },
    {
      id: 2,
      user: 'Mike Johnson',
      action: 'commented on',
      task: 'Database Schema',
      time: '12 minutes ago',
    },
    {
      id: 3,
      user: 'Emily Davis',
      action: 'assigned to',
      task: 'User Testing',
      time: '1 hour ago',
    },
    {
      id: 4,
      user: 'John Doe',
      action: 'created task',
      task: 'Sprint Planning',
      time: '2 hours ago',
    },
  ];

  const getRoleBadge = (role) => {
    switch (role) {
      case 'Owner':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
      case 'Admin':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
    }
  };

  const getRoleIcon = (role) => {
    if (role === 'Owner') return <Crown className="w-4 h-4" />;
    if (role === 'Admin') return <Shield className="w-4 h-4" />;
    return null;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-600 p-8 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">
                Teams & Collaboration 👥
              </h1>
              <p className="text-white/90 text-lg">
                Work together and achieve more
              </p>
            </div>
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-xl transition-all flex items-center">
              <UserPlus className="w-5 h-5 mr-2" />
              Invite Members
            </button>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {teamMembers.length}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
        </div>
        <div className="card p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {sharedBoards.reduce((acc, board) => acc + board.tasks, 0)}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Tasks</p>
        </div>
        <div className="card p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {sharedBoards.reduce((acc, board) => acc + board.completed, 0)}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
        </div>
        <div className="card p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              83%
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Team Efficiency</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex border-b border-gray-200 dark:border-gray-700 px-6">
          {[
            { id: 'members', label: 'Team Members' },
            { id: 'boards', label: 'Shared Boards' },
            { id: 'activity', label: 'Activity' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium transition-all ${
                activeTab === tab.id
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'members' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="card p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {member.avatar}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-white dark:border-gray-800`}></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                      <Mail className="w-3 h-3" />
                      <span>{member.email}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadge(member.role)}`}>
                    {getRoleIcon(member.role)}
                    <span>{member.role}</span>
                  </span>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {member.tasksCompleted}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Completed</p>
                </div>
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {member.tasksInProgress}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">In Progress</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Joined {new Date(member.joinedDate).toLocaleDateString()}
                </span>
                <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'boards' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sharedBoards.map((board) => (
            <div
              key={board.id}
              className="card p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${board.color} rounded-full mb-4`}></div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {board.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {board.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {board.members} members
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {board.tasks} tasks
                  </span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {Math.round((board.completed / board.tasks) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${board.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${(board.completed / board.tasks) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'activity' && (
        <div className="card p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Team Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-semibold">{activity.user}</span>
                    {' '}{activity.action}{' '}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      {activity.task}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
