const express = require('express');
const path = require('path');
const debug = require('debug')('api:user route');
// const fs = require('fs');

const vendorController = require('../controllers/vendors.controller');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('pele');
});

module.exports = router;
