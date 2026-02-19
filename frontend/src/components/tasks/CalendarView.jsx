import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, isSameDay } from 'date-fns';
import { Clock, CheckCircle2 } from 'lucide-react';

const CalendarView = ({ tasks = [] }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample tasks if none provided
  const defaultTasks = [
    {
      id: 1,
      title: 'Team Meeting',
      dueDate: new Date(),
      status: 'todo',
      priority: 'high',
      time: '10:00 AM',
    },
    {
      id: 2,
      title: 'Code Review',
      dueDate: new Date(),
      status: 'in_progress',
      priority: 'medium',
      time: '2:00 PM',
    },
    {
      id: 3,
      title: 'Client Presentation',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      status: 'todo',
      priority: 'urgent',
      time: '11:00 AM',
    },
    {
      id: 4,
      title: 'Documentation Update',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
      status: 'completed',
      priority: 'low',
      time: '3:00 PM',
    },
  ];

  const displayTasks = tasks.length > 0 ? tasks : defaultTasks;

  const getTasksForDate = (date) => {
    return displayTasks.filter((task) =>
      isSameDay(new Date(task.dueDate), date)
    );
  };

  const selectedDateTasks = getTasksForDate(selectedDate);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const tasksOnDate = getTasksForDate(date);
      if (tasksOnDate.length > 0) {
        return 'has-tasks';
      }
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const tasksOnDate = getTasksForDate(date);
      if (tasksOnDate.length > 0) {
        return (
          <div className="flex justify-center mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
          </div>
        );
      }
    }
    return null;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'border-l-4 border-red-500';
      case 'high':
        return 'border-l-4 border-orange-500';
      case 'medium':
        return 'border-l-4 border-yellow-500';
      default:
        return 'border-l-4 border-blue-500';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <div className="lg:col-span-2 card p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Task Calendar
        </h3>
        <div className="calendar-wrapper">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={tileClassName}
            tileContent={tileContent}
            className="custom-calendar w-full border-none"
          />
        </div>
      </div>

      {/* Tasks for Selected Date */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          {format(selectedDate, 'MMMM dd, yyyy')}
        </h3>
        
        {selectedDateTasks.length > 0 ? (
          <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
            {selectedDateTasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 ${getPriorityColor(
                  task.priority
                )}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {task.title}
                  </h4>
                  {task.status === 'completed' && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                </div>

                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <Clock className="w-3 h-3 mr-1" />
                  {task.time}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      task.priority === 'urgent'
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                        : task.priority === 'high'
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                        : task.priority === 'medium'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    }`}
                  >
                    {task.priority}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      task.status === 'completed'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : task.status === 'in_progress'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'
                    }`}
                  >
                    {task.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 dark:text-gray-600">
              No tasks scheduled for this date
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .calendar-wrapper :global(.react-calendar) {
          width: 100%;
          border: none;
          font-family: inherit;
        }
        .calendar-wrapper :global(.react-calendar__tile) {
          padding: 1em 0.5em;
          position: relative;
        }
        .calendar-wrapper :global(.react-calendar__tile--active) {
          background: #667eea;
          color: white;
        }
        .calendar-wrapper :global(.react-calendar__tile--now) {
          background: #f3f4f6;
        }
        .calendar-wrapper :global(.react-calendar__tile:enabled:hover) {
          background-color: #e5e7eb;
        }
        .calendar-wrapper :global(.has-tasks) {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default CalendarView;
