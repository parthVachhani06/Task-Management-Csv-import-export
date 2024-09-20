
const { Parser } = require('json2csv');
const csv = require('fast-csv');
const fs = require('fs');
const Task = require('../models/taskModel');
const { validateTaskData } = require('../utils/csvHelper');

exports.exportTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        const fields = ['title', 'description', 'dueDate', 'priority', 'status', 'assignedUser'];
        const parser = new Parser({ fields });
        const csv = parser.parse(tasks);

        res.header('Content-Type', 'text/csv');
        res.attachment('tasks.csv');
        res.send(csv);
    } catch (error) {
        res.status(500).json({ error: 'Failed to export tasks' });
    }
};


exports.importTasks = async (req, res) => {
    try {
        const fileRows = [];
        const failedImports = [];

        fs.createReadStream(req.file.path)
            .pipe(csv.parse({ headers: true }))
            .on('data', async (row) => {
                const validationResult = validateTaskData(row);

                if (!validationResult.isValid) {
                    failedImports.push({ row, error: validationResult.error });
                } else {
                    const taskExists = await Task.findOne({ title: row.title });
                    if (taskExists) {
                        failedImports.push({ row, error: 'Duplicate task title' });
                    } else {
                        const newTask = new Task(row);
                        await newTask.save();
                    }
                }
            })
            .on('end', () => {
                if (failedImports.length) {
                    const parser = new Parser();
                    const csvErrorReport = parser.parse(failedImports);
                    res.header('Content-Type', 'text/csv');
                    res.attachment('error-report.csv');
                    return res.send(csvErrorReport);
                }
                res.status(200).json({ message: 'Tasks imported successfully' });
            });
    } catch (error) {
        res.status(500).json({ error: 'Failed to import tasks' });
    }
};
 
exports.getTasks = async (req, res) => {
    const { status, priority, assignee, dueDate, page = 1, limit = 10, sortBy = 'dueDate' } = req.query;

    const query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (assignee) query.assignedUser = assignee;
    if (dueDate) query.dueDate = { $lte: new Date(dueDate) };

    try {
        const tasks = await Task.find(query)
            .sort({ [sortBy]: 1 })
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};
