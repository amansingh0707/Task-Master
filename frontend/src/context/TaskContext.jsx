import { createContext, useState, useCallback } from 'react';
import { taskService } from '../services/taskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
    sortBy: 'createdAt',
  });

  const fetchTasks = useCallback(async (customFilters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const filterParams = customFilters;
      const data = await taskService.getTasks(filterParams);
      setTasks(data.tasks || data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  }, []);

  const createTask = async (taskData) => {
    try {
      const newTask = await taskService.createTask(taskData);
      setTasks(prev => [newTask, ...prev]);
      return newTask;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to create task');
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const updatedTask = await taskService.updateTask(id, taskData);
      setTasks(prev => prev.map(task => task._id === id ? updatedTask : task));
      return updatedTask;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(prev => prev.filter(task => task._id !== id));
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to delete task');
    }
  };

  const updateTaskStatus = async (id, status) => {
    try {
      const updatedTask = await taskService.updateTaskStatus(id, status);
      setTasks(prev => prev.map(task => task._id === id ? updatedTask : task));
      return updatedTask;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to update task status');
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const value = {
    tasks,
    loading,
    error,
    filters,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateFilters,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
