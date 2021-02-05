const debug = require('debug')('api:users.service');
const Customer = require('../models/users');

const UserService = {};

UserService.getCustomers = async (query, page, limit) => {
	try {
		const users = await Customer.find(query);
		return users;
	} catch (e) {
		throw Error('Error while paginating Users');
	}
};

UserService.getOneCustomer = async (query) => {
	try {
		const user = await Customer.findById(query);
		return user;
	} catch (e) {
		throw Error(e.message);
	}
};

UserService.createCustomer = async (doc) => {
	try {
		const user = new Customer(doc);
		return await user.save();
	} catch (err) {
		throw Error('Error while adding user');
	}
};

module.exports = UserService;
