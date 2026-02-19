import { useEffect, useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { Plus, List, LayoutGrid, Calendar, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import TaskList from '../components/tasks/TaskList';
import TaskFilters from '../components/tasks/TaskFilters';
import KanbanView from '../components/tasks/KanbanView';
import CalendarView from '../components/tasks/CalendarView';
import TimelineView from '../components/tasks/TimelineView';
import Modal from '../components/ui/Modal';
import TaskForm from '../components/tasks/TaskForm';
import { toast } from 'react-toastify';

const TasksPage = () => {
  const { tasks, loading, fetchTasks, createTask, filters } = useTasks();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  const handleCreateTask = async (taskData) => {
    try {
      await createTask(taskData);
      toast.success('Task created successfully');
      setShowCreateModal(false);
      fetchTasks();
    } catch (error) {
      toast.error(error.message || 'Failed to create task');
    }
  };

  const viewModes = [
    { id: 'list', label: 'List', icon: List },
    { id: 'kanban', label: 'Kanban', icon: LayoutGrid },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'timeline', label: 'Timeline', icon: Clock },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Gradient */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 p-8 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">
                All Tasks 📝
              </h1>
              <p className="text-white/90 text-lg">
                Manage and organize all your tasks efficiently
              </p>
            </div>
            <Button 
              onClick={() => setShowCreateModal(true)} 
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-3 shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Task
            </Button>
          </div>
        </div>
      </div>

      {/* View Switcher & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* View Mode Buttons */}
        <div className="card p-1 inline-flex">
          {viewModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === mode.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {mode.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters - Only show for list view */}
      {viewMode === 'list' && <TaskFilters />}

      {/* Tasks - Different Views */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="animate-fade-in">
          {viewMode === 'list' && <TaskList tasks={tasks} />}
          {viewMode === 'kanban' && <KanbanView tasks={tasks} />}
          {viewMode === 'calendar' && <CalendarView tasks={tasks} />}
          {viewMode === 'timeline' && <TimelineView tasks={tasks} />}
        </div>
      )}

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

export default TasksPage;
