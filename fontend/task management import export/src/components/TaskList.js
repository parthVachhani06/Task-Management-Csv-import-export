import React from 'react';

const TaskList = ({ tasks }) => {
  const sampleTasks = [
    { title: 'Task 1', description: 'Task 1 description', dueDate: '2024-09-30', priority: 'High', status: 'In Progress', assignee: 'John Doe' },
    { title: 'Task 2', description: 'Task 2 description', dueDate: '2024-10-01', priority: 'Medium', status: 'Completed', assignee: 'Jane Doe' }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {sampleTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>{task.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
