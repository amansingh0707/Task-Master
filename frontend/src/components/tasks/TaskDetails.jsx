import { Calendar, Tag, Clock, Edit2, CheckCircle2, Circle } from 'lucide-react';
import { PRIORITY_COLORS, STATUS_COLORS } from '../../utils/constants';
import { formatDate, formatRelativeTime } from '../../utils/helpers';
import Button from '../ui/Button';

const TaskDetails = ({ task, onEdit }) => {
  const priorityClass = PRIORITY_COLORS[task.priority];
  const statusClass = STATUS_COLORS[task.status];

  return (
    <div className="space-y-6">
      {/* Title and Edit Button */}
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {task.title}
        </h2>
        <Button onClick={onEdit} variant="outline" size="sm">
          <Edit2 className="w-4 h-4 mr-2" />
          Edit
        </Button>
      </div>

      {/* Status and Priority */}
      <div className="flex items-center space-x-3">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${priorityClass}`}>
          {task.priority}
        </span>
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusClass}`}>
          {task.status.replace('-', ' ')}
        </span>
      </div>

      {/* Description */}
      {task.description && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </h3>
          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
            {task.description}
          </p>
        </div>
      )}

      {/* Due Date */}
      {task.dueDate && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Due Date
          </h3>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>{formatDate(task.dueDate)}</span>
          </div>
        </div>
      )}

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {task.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Subtasks */}
      {task.subtasks && task.subtasks.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subtasks ({task.subtasks.filter(st => st.completed).length}/{task.subtasks.length})
          </h3>
          <div className="space-y-2">
            {task.subtasks.map((subtask, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                {subtask.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
                <span className={`${subtask.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                  {subtask.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comments */}
      {task.comments && task.comments.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Comments ({task.comments.length})
          </h3>
          <div className="space-y-3">
            {task.comments.map((comment, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-900 dark:text-white mb-1">{comment.text}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formatRelativeTime(comment.createdAt)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timestamps */}
      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Created {formatRelativeTime(task.createdAt)}</span>
          </div>
          <span>Updated {formatRelativeTime(task.updatedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
