import { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import TaskDetails from './TaskDetails';
import Modal from '../ui/Modal';
import { toast } from 'react-toastify';

const TaskList = ({ tasks }) => {
  const { updateTask, deleteTask } = useTasks();
  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowDetailsModal(true);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowEditModal(true);
  };

  const handleDelete = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(taskId);
        toast.success('Task deleted successfully');
      } catch (error) {
        toast.error(error.message || 'Failed to delete task');
      }
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      await updateTask(editingTask._id, taskData);
      toast.success('Task updated successfully');
      setShowEditModal(false);
      setEditingTask(null);
    } catch (error) {
      toast.error(error.message || 'Failed to update task');
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No tasks found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Create a new task to get started!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task._id} onClick={() => handleTaskClick(task)}>
            <TaskCard
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>

      {/* Task Details Modal */}
      {selectedTask && (
        <Modal
          isOpen={showDetailsModal}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedTask(null);
          }}
          title="Task Details"
          size="lg"
        >
          <TaskDetails task={selectedTask} onEdit={() => {
            setShowDetailsModal(false);
            handleEdit(selectedTask);
          }} />
        </Modal>
      )}

      {/* Edit Task Modal */}
      {editingTask && (
        <Modal
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setEditingTask(null);
          }}
          title="Edit Task"
          size="lg"
        >
          <TaskForm
            initialData={editingTask}
            onSubmit={handleUpdateTask}
            onCancel={() => {
              setShowEditModal(false);
              setEditingTask(null);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default TaskList;
