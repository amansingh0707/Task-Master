import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import { taskService } from '../services/taskService';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  Plus,
  ArrowRight,
  Target,
  Zap
} from 'lucide-react';
import Button from '../components/ui/Button';
import TaskList from '../components/tasks/TaskList';
import Modal from '../components/ui/Modal';
import TaskForm from '../components/tasks/TaskForm';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import RecentlyViewed from '../components/dashboard/RecentlyViewed';
import FloatingActionButton from '../components/dashboard/FloatingActionButton';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const { tasks, fetchTasks, createTask } = useTasks();
  const [analytics, setAnalytics] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showFocusMode, setShowFocusMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setError(null);
        await fetchTasks({ limit: 6 });
        const analyticsData = await taskService.getAnalytics();
        setAnalytics(analyticsData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setError(error.response?.data?.message || error.message || 'Failed to load dashboard data');
        toast.error('Failed to load dashboard data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [fetchTasks]);

  const handleCreateTask = async (taskData) => {
    try {
      await createTask(taskData);
      toast.success('Task created successfully');
      setShowCreateModal(false);
    } catch (error) {
      toast.error(error.message || 'Failed to create task');
    }
  };

  const handleQuickAction = (action) => {
    switch (action) {
      case 'createTask':
        setShowCreateModal(true);
        break;
      case 'startTimer':
        setShowTimerModal(true);
        toast.info('Timer feature coming soon!');
        break;
      case 'quickSearch':
        toast.info('Quick search feature coming soon!');
        break;
      case 'addNote':
        toast.info('Note feature coming soon!');
        break;
      case 'focusMode':
        setShowFocusMode(true);
        toast.info('Focus mode activated!');
        break;
      default:
        toast.info(`${action} feature coming soon!`);
    }
  };

  const handleFloatingAction = (actionId) => {
    switch (actionId) {
      case 'task':
        setShowCreateModal(true);
        break;
      case 'timer':
        toast.info('Timer feature coming soon!');
        break;
      case 'focus':
        toast.info('Focus mode feature coming soon!');
        break;
      default:
        toast.info('Feature coming soon!');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <AlertCircle className="w-16 h-16 text-red-500" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Failed to Load Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400">{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      {/* Header with Gradient */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 via-secondary-500 to-purple-600 p-8 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">
                Welcome Back! 👋
              </h1>
              <p className="text-white/90 text-lg">
                Here's what's happening with your tasks today
              </p>
            </div>
            <Button 
              onClick={() => setShowCreateModal(true)} 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Task
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats Cards */}
      {analytics && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Total Tasks
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {analytics.total}
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="card p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Completed
                </p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">
                  {analytics.completed}
                </p>
                <div className="mt-2 flex items-center text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-green-600">{analytics.completionRate}%</span>
                  <span className="ml-1">rate</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="card p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  In Progress
                </p>
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
                  {analytics.inProgress}
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="card p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Overdue
                </p>
                <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-2">
                  {analytics.overdue}
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Tasks Section */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Target className="w-6 h-6 mr-2 text-primary-500" />
            Recent Tasks
          </h2>
          <Link
            to="/tasks"
            className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold group"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <TaskList tasks={tasks.slice(0, 6)} />
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-max lg:auto-rows-fr">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6 flex flex-col">
          {/* Recently Viewed */}
          <RecentlyViewed tasks={tasks.slice(0, 4)} />
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6 flex flex-col">
          {/* Activity Feed */}
          <ActivityFeed />
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton onAction={handleFloatingAction} />

      {/* Create Task Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Task"
        size="lg"
      >
        <TaskForm
          onSubmit={handleCreateTask}
          onCancel={() => setShowCreateModal(false)}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
