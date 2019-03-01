// controllers/employeeController.js

var Employee = require('../models/employee')

// Display list of all employees
exports.employee_list = function (req, res, next) {
  Employee.find({}, 'employee')
    .sort([['last_name', 'ascending']])
    .exec(function (err, listEmployees) {
      if (err) { return next(err) }
      res.status(200).json({ title: 'Employee list', employee_list: listEmployees })
    })
}

// Display list of all employees for a specific department
exports.department_list = function (req, res, next) {
  // Capitalize department name
  var department = req.params.department
  var deptCapitalized = department.charAt(0).toUpperCase() + department.slice(1)

  // res.send(deptCapitalized)

  Employee.find({ 'employee.as_affiliations': deptCapitalized }, 'employee')
    .sort([['last_name', 'ascending']])
    .exec(function (err, listEmployees) {
      if (err) { return console.log(err) }
      res.status(200).json({ title: 'Employee list', employee_list: listEmployees })
    })
}
