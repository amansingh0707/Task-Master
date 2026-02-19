import { Edit2, Trash2, Calendar, Tag, Clock } from 'lucide-react';
import { PRIORITY_COLORS, STATUS_COLORS } from '../../utils/constants';
import { formatDate, isOverdue, getDueDateLabel } from '../../utils/helpers';

const TaskCard = ({ task, onEdit, onDelete, onStatusChange }) => {
  const priorityClass = PRIORITY_COLORS[task.priority];
  const statusClass = STATUS_COLORS[task.status];
  const overdue = isOverdue(task.dueDate) && task.status !== 'completed';

  return (
    <div className="card p-5 hover:scale-[1.02] transition-transform cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
              {task.description}
            </p>
          )}
        </div>
      </div>

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityClass}`}>
            {task.priority}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusClass}`}>
            {task.status.replace('-', ' ')}
          </span>
        </div>

        {task.dueDate && (
          <div className={`flex items-center space-x-1 text-xs ${overdue ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
            <Calendar className="w-4 h-4" />
            <span>{getDueDateLabel(task.dueDate)}</span>
          </div>
        )}
      </div>

      {/* Subtasks Progress */}
      {task.subtasks && task.subtasks.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
            <span>Subtasks</span>
            <span>
              {task.subtasks.filter(st => st.completed).length}/{task.subtasks.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all"
              style={{
                width: `${(task.subtasks.filter(st => st.completed).length / task.subtasks.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{formatDate(task.createdAt)}</span>
        </div>

        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(task);
            }}
            className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 rounded-lg transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task._id);
            }}
            className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
