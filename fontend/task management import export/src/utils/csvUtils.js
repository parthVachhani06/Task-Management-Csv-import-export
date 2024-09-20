export const validateCSVData = (tasks) => {
    return tasks.map(task => {
      if (!task.title) {
        return { ...task, error: 'Title is missing' };
      }
      if (new Date(task.dueDate) < new Date()) {
        return { ...task, error: 'Due date is in the past' };
      }
      return { ...task, error: null };
    });
  };
  