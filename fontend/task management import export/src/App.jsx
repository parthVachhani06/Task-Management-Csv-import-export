import React from 'react';
import TaskList from './components/TaskList';
import TaskPagination from './components/TaskPaginatiton';
import TaskExport from './components/TaskExport';
import TaskImport from './components/TaskImport';
import TaskFilter from './components/TaskFilter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task Management System</h1>
      <TaskFilter />
      <TaskList />
      <TaskPagination />
      <TaskImport />
      <TaskExport />
    </div>
  );
}

export default App;
