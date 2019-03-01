// routes/directory.js

var express = require('express')
var router = express.Router()

// Require employee controller
var employeeController = require('../controllers/employeeController')

// Main directory page
router.get('/', employeeController.employee_list)

// Department directory page
router.get('/:department', employeeController.department_list)

module.exports = router
