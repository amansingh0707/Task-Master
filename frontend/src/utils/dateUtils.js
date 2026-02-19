import { 
  format, 
  formatDistanceToNow, 
  isValid, 
  parseISO, 
  isPast, 
  isToday, 
  isTomorrow 
} from 'date-fns';

/**
 * Safely parses and validates a date value
 * @param {*} dateValue - Can be Date object, ISO string, or null/undefined
 * @returns {Date|null} - Valid Date object or null
 */
export const getValidDate = (dateValue) => {
  if (!dateValue) return null;
  
  // If it's already a Date object
  if (dateValue instanceof Date) {
    return isValid(dateValue) ? dateValue : null;
  }
  
  // If it's a string, try to parse it
  if (typeof dateValue === 'string') {
    const parsed = parseISO(dateValue);
    return isValid(parsed) ? parsed : null;
  }
  
  // If it's a timestamp number
  if (typeof dateValue === 'number') {
    const date = new Date(dateValue);
    return isValid(date) ? date : null;
  }
  
  return null;
};

/**
 * Safely formats a date with error handling
 * @param {*} date - Date value to format
 * @param {string} formatString - Format string for date-fns format function
 * @param {string} fallback - Fallback string if date is invalid
 * @returns {string} - Formatted date or fallback
 */
export const safeFormatDate = (date, formatString = 'MMM dd, yyyy', fallback = '') => {
  const validDate = getValidDate(date);
  if (!validDate) return fallback;
  
  try {
    return format(validDate, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return fallback;
  }
};

/**
 * Safely formats relative time with error handling
 * @param {*} date - Date value to format
 * @param {object} options - Options for formatDistanceToNow
 * @param {string} fallback - Fallback string if date is invalid
 * @returns {string} - Relative time string or fallback
 */
export const safeFormatRelativeTime = (date, options = { addSuffix: true }, fallback = 'Recently') => {
  const validDate = getValidDate(date);
  if (!validDate) return fallback;
  
  try {
    return formatDistanceToNow(validDate, options);
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return fallback;
  }
};

/**
 * Check if a date is overdue (past and not completed)
 * @param {*} dueDate - Date to check
 * @returns {boolean} - True if overdue
 */
export const isOverdue = (dueDate) => {
  const validDate = getValidDate(dueDate);
  if (!validDate) return false;
  
  return isPast(validDate) && !isToday(validDate);
};

/**
 * Get a human-readable due date label
 * @param {*} dueDate - Date to check
 * @returns {string} - Label like "Due Today", "Due Tomorrow", "Overdue", etc.
 */
export const getDueDateLabel = (dueDate) => {
  const validDate = getValidDate(dueDate);
  if (!validDate) return 'No due date';
  
  if (isToday(validDate)) return 'Due Today';
  if (isTomorrow(validDate)) return 'Due Tomorrow';
  if (isOverdue(dueDate)) return 'Overdue';
  
  return safeFormatDate(validDate, 'MMM dd, yyyy', 'Invalid date');
};

/**
 * Safely compare two dates
 * @param {*} date1 - First date
 * @param {*} date2 - Second date
 * @returns {number} - Negative if date1 < date2, positive if date1 > date2, 0 if equal or invalid
 */
export const compareDates = (date1, date2) => {
  const valid1 = getValidDate(date1);
  const valid2 = getValidDate(date2);
  
  if (!valid1 || !valid2) return 0;
  
  return valid1.getTime() - valid2.getTime();
};

export default {
  getValidDate,
  safeFormatDate,
  safeFormatRelativeTime,
  isOverdue,
  getDueDateLabel,
  compareDates,
};
