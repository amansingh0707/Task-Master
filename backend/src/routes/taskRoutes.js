import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  addSubtask,
  addComment,
  getAnalytics,
} from '../controllers/taskController.js';
import { protect } from '../middleware/auth.js';
import { validateTask, handleValidationErrors } from '../middleware/validation.js';

const router = express.Router();

// Analytics route should come before :id routes
router.get('/analytics', protect, getAnalytics);

// Task CRUD operations
router.route('/')
  .get(protect, getTasks)
  .post(protect, validateTask, handleValidationErrors, createTask);

router.route('/:id')
  .get(protect, getTask)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

// Task status update
router.patch('/:id/status', protect, updateTaskStatus);

// Subtasks and comments
router.post('/:id/subtasks', protect, addSubtask);
router.post('/:id/comments', protect, addComment);

export default router;
