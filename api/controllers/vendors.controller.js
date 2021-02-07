const debug = require('debug')('api:vendor.controller');

const VendorService = require('../services/vendors.service');

const controller = {};

controller.getVendors = async (req, res, next) => {
	try {
		const page = req.params.page ? req.params.page : 1;
		const limit = req.params.limit ? req.params.limit : 10;
		const query = {};
		const vendors = await  VendorService.getVendors(query, page, limit);
		return res.status(200).json({status: 200, message: 'Vendors retrieved successfully', data: vendors})
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

module.exports = controller;
