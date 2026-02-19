import Task from '../models/Task.js';

// @desc    Get all tasks for user
// @route   GET /api/tasks
// @access  Private
export const getTasks = async (req, res) => {
  try {
    const { status, priority, search, sortBy, page = 1, limit = 50 } = req.query;
    
    const query = { user: req.user._id };

    // Apply filters
    if (status && status !== 'all') {
      query.status = status;
    }
    if (priority && priority !== 'all') {
      query.priority = priority;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    // Sorting
    let sortOptions = {};
    switch (sortBy) {
      case 'dueDate':
        sortOptions = { dueDate: 1 };
        break;
      case 'priority':
        sortOptions = { priority: -1 };
        break;
      case 'title':
        sortOptions = { title: 1 };
        break;
      default:
        sortOptions = { createdAt: -1 };
    }

    // Pagination
    const skip = (page - 1) * limit;

    const tasks = await Task.find(query)
      .sort(sortOptions)
      .limit(parseInt(limit))
      .skip(skip);

    const total = await Task.countDocuments(query);

    res.json({
      tasks,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalTasks: total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Private
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if task belongs to user
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new task
// @route   POST /api/tasks
// @access  Private
export const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      user: req.user._id,
      title: req.body.title,
      description: req.body.description || '',
      status: req.body.status || 'todo',
      priority: req.body.priority || 'medium',
      tags: req.body.tags || [],
      dueDate: req.body.dueDate,
      subtasks: req.body.subtasks || [],
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if task belongs to user
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    // Update fields
    task.title = req.body.title || task.title;
    task.description = req.body.description !== undefined ? req.body.description : task.description;
    task.status = req.body.status || task.status;
    task.priority = req.body.priority || task.priority;
    task.tags = req.body.tags !== undefined ? req.body.tags : task.tags;
    task.dueDate = req.body.dueDate !== undefined ? req.body.dueDate : task.dueDate;
    task.subtasks = req.body.subtasks !== undefined ? req.body.subtasks : task.subtasks;

    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if task belongs to user
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await task.deleteOne();

    res.json({ message: 'Task removed', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update task status
// @route   PATCH /api/tasks/:id/status
// @access  Private
export const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if task belongs to user
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    task.status = req.body.status;
    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add subtask
// @route   POST /api/tasks/:id/subtasks
// @access  Private
export const addSubtask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if task belongs to user
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    task.subtasks.push({
      title: req.body.title,
      completed: req.body.completed || false,
    });

    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add comment
// @route   POST /api/tasks/:id/comments
// @access  Private
export const addComment = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if task belongs to user
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    task.comments.push({
      text: req.body.text,
    });

    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get task analytics
// @route   GET /api/tasks/analytics
// @access  Private
export const getAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get all tasks for user
    const allTasks = await Task.find({ user: userId });

    // Calculate statistics
    const total = allTasks.length;
    const completed = allTasks.filter(task => task.status === 'completed').length;
    const inProgress = allTasks.filter(task => task.status === 'in-progress').length;
    const todo = allTasks.filter(task => task.status === 'todo').length;
    const archived = allTasks.filter(task => task.status === 'archived').length;

    // Priority breakdown
    const urgent = allTasks.filter(task => task.priority === 'urgent').length;
    const high = allTasks.filter(task => task.priority === 'high').length;
    const medium = allTasks.filter(task => task.priority === 'medium').length;
    const low = allTasks.filter(task => task.priority === 'low').length;

    // Overdue tasks
    const now = new Date();
    const overdue = allTasks.filter(
      task => task.dueDate && new Date(task.dueDate) < now && task.status !== 'completed'
    ).length;

    // Completion rate
    const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

    res.json({
      total,
      completed,
      inProgress,
      todo,
      archived,
      overdue,
      completionRate,
      priorityBreakdown: {
        urgent,
        high,
        medium,
        low,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
