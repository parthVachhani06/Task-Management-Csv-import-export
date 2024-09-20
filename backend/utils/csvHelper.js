
const validateTaskData = (row) => {
    if (!row.title) return { isValid: false, error: 'Title is required' };
    if (new Date(row.dueDate) < new Date()) return { isValid: false, error: 'Due date cannot be in the past' };
    if (!['Low', 'Medium', 'High'].includes(row.priority)) return { isValid: false, error: 'Invalid priority' };
    if (!['Pending', 'In Progress', 'Completed'].includes(row.status)) return { isValid: false, error: 'Invalid status' };
    if (!row.assignedUser) return { isValid: false, error: 'Assigned user is required' };
    
    return { isValid: true };
};

module.exports = { validateTaskData };
