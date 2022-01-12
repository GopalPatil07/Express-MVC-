const express = require('express');

const studentsController = require('../Controller/students')

const router = express.Router();

router.get("/", studentsController.getAllStudents);

module.exports = router;