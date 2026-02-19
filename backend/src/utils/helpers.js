import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

// Generate JWT Token
export const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
};

// Format task data
export const formatTaskResponse = (task) => {
  return {
    id: task._id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    tags: task.tags,
    dueDate: task.dueDate,
    subtasks: task.subtasks,
    comments: task.comments,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};
