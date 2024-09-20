import React from 'react';
import { CSVLink } from 'react-csv';

const TaskExport = ({ tasks }) => {
  const headers = [
    { label: 'Title', key: 'title' },
    { label: 'Description', key: 'description' },
    { label: 'Due Date', key: 'dueDate' },
    { label: 'Priority', key: 'priority' },
    { label: 'Status', key: 'status' },
    { label: 'Assignee', key: 'assignee' }
  ];

  const sampleTasks = [
    { title: 'Task 1', description: 'Task 1 description', dueDate: '2024-09-30', priority: 'High', status: 'In Progress', assignee: 'John Doe' }
  ];

  return (
    <CSVLink data={sampleTasks} headers={headers} filename="tasks.csv">
      Export Tasks to CSV
    </CSVLink>
  );
};

export default TaskExport;
