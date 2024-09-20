
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], required: true },
    assignedUser: { type: String, required: true }
});

module.exports = mongoose.model('Task', taskSchema);
