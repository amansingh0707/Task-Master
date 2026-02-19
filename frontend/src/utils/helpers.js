import { format, formatDistanceToNow, isPast, isToday, isTomorrow } from 'date-fns';

export const formatDate = (date) => {
  if (!date) return '';
  return format(new Date(date), 'MMM dd, yyyy');
};

export const formatDateTime = (date) => {
  if (!date) return '';
  return format(new Date(date), 'MMM dd, yyyy HH:mm');
};

export const formatRelativeTime = (date) => {
  if (!date) return '';
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const isOverdue = (dueDate) => {
  if (!dueDate) return false;
  return isPast(new Date(dueDate)) && !isToday(new Date(dueDate));
};

export const getDueDateLabel = (dueDate) => {
  if (!dueDate) return '';
  const date = new Date(dueDate);
  
  if (isToday(date)) return 'Due Today';
  if (isTomorrow(date)) return 'Due Tomorrow';
  if (isOverdue(dueDate)) return 'Overdue';
  
  return formatDate(dueDate);
};

export const getInitials = (name) => {
  if (!name) return 'U';
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
