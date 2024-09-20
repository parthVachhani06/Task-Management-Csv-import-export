
const express = require('express');
const multer = require('multer');
const { exportTasks, importTasks, getTasks } = require('../controllers/taskController');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('/export', exportTasks);           
router.post('/import', upload.single('file'), importTasks); 
router.get('/', getTasks);
module.exports = router;
