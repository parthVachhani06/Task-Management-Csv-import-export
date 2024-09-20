

import React from 'react';

const TaskFilter = ({ onFilterChange }) => {
  return (
    <div>
      <h3>Filter Tasks</h3>
      <div>
        <label>Status:</label>
        <select onChange={(e) => onFilterChange('status', e.target.value)}>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        <label>Priority:</label>
        <select onChange={(e) => onFilterChange('priority', e.target.value)}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <label>Due Date:</label>
        <input
          type="date"
          onChange={(e) => onFilterChange('dueDate', e.target.value)}
        />
      </div>
    </div>
  );
};

export default TaskFilter;
