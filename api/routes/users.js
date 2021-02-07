const express = require('express');
const path = require('path');
const debug = require('debug')('api:user route');
// const fs = require('fs');

const router = express.Router();

const UserController = require('../controllers/users.controller');
/* GET users listing. */
router.get('/', UserController.getCustomers);

router.post('/addcustomer', UserController.createCustomer);

router.get('/:id', UserController.getOneCustomer);
router.post('/:id/addpreferredvendor', UserController.addPreferredVendor);

module.exports = router;
