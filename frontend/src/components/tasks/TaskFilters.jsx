import { Search, Filter } from 'lucide-react';
import { useTasks } from '../../hooks/useTasks';
import { debounce } from '../../utils/helpers';
import Dropdown from '../ui/Dropdown';

const TaskFilters = () => {
  const { filters, updateFilters } = useTasks();

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'archived', label: 'Archived' },
  ];

  const priorityOptions = [
    { value: 'all', label: 'All Priorities' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];

  const sortOptions = [
    { value: 'createdAt', label: 'Sort by Date' },
    { value: 'dueDate', label: 'Sort by Due Date' },
    { value: 'priority', label: 'Sort by Priority' },
    { value: 'title', label: 'Sort by Title' },
  ];

  const handleSearchChange = debounce((value) => {
    updateFilters({ search: value });
  }, 500);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tasks..."
              defaultValue={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <Dropdown
            options={statusOptions}
            value={filters.status}
            onChange={(value) => updateFilters({ status: value })}
          />
        </div>

        {/* Priority Filter */}
        <div>
          <Dropdown
            options={priorityOptions}
            value={filters.priority}
            onChange={(value) => updateFilters({ priority: value })}
          />
        </div>

        {/* Sort */}
        <div className="md:col-span-4">
          <Dropdown
            options={sortOptions}
            value={filters.sortBy}
            onChange={(value) => updateFilters({ sortBy: value })}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskFilters;
