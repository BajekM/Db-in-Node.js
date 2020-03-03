const express = require('express');
const router = express.Router();
// const ObjectId = require('mongodb').ObjectId;
const Employee = require('../models/employee.model');
const EmployeeController = require('../controllers/employees.controller');

router.get('/employees', EmployeeController.getAll);
router.get('/employees/random', EmployeeController.getRandom);
router.get('/employees/:id', EmployeeController.getById);
router.post('/employees', EmployeeController.addNew);
router.put('/employees/:id', EmployeeController.modify);
router.delete('/employees/:id' ,EmployeeController.delete);

module.exports = router;