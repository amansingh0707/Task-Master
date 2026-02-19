import api from './api';

export const taskService = {
  getTasks: async (filters = {}) => {
    const queryParams = new URLSearchParams();
    
    Object.keys(filters).forEach(key => {
      if (filters[key] !== undefined && filters[key] !== '') {
        queryParams.append(key, filters[key]);
      }
    });

    const response = await api.get(`/tasks?${queryParams.toString()}`);
    return response.data;
  },

  getTask: async (id) => {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
  },

  createTask: async (taskData) => {
    const response = await api.post('/tasks', taskData);
    return response.data;
  },

  updateTask: async (id, taskData) => {
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data;
  },

  deleteTask: async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  },

  updateTaskStatus: async (id, status) => {
    const response = await api.patch(`/tasks/${id}/status`, { status });
    return response.data;
  },

  addSubtask: async (id, subtask) => {
    const response = await api.post(`/tasks/${id}/subtasks`, subtask);
    return response.data;
  },

  addComment: async (id, comment) => {
    const response = await api.post(`/tasks/${id}/comments`, comment);
    return response.data;
  },

  getAnalytics: async () => {
    const response = await api.get('/tasks/analytics');
    return response.data;
  },
};
