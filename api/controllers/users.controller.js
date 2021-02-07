const debug = require('debug')('api:users.controller');

const UserService = require('../services/users.service');

const controller = {};

controller.getCustomers = async (req, res, next) => {
	const page = req.params.page ? req.params.page : 1;
	const limit = req.params.limit ? req.params.limit : 10;

	try {
		const users = await UserService.getCustomers({}, page, limit);
		return res.status(200).json({ status: 200, data: users, message: 'Users retrieved successfully' });
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

controller.getOneCustomer = async (req, res, next) => {
	const { id } = req.params;
	try {
		const user = await UserService.getOneCustomer(id);
		return res.status(200).json({ status: 200, data: user, message: 'User information retrieved' });
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

controller.createCustomer = async (req, res, next) => {
	try {
		const user = await UserService.createCustomer(req.body);
		return res.status(200).json({ status: 200, data: user, message: 'User created successfully' });
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

controller.addPreferredVendor = async (req, res, next) => {
	try {
		const result = await UserService.addPreferredVendor(req.body);
		return res.status(200).json({ status: 200, data: result });
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

module.exports = controller;
