const debug = require('debug')('api:users.service');
const Customer = require('../models/users');

const UserService = {};

UserService.getCustomers = async (query, page, limit) => {
	try {
		const users = await Customer.find(query).select({
			firstname: 1,
			lastname: 1,
			measurementId: 1,
			preferredVendors: 1,
		});
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

UserService.addPreferredVendor = async (doc) => {
	const { id, vendorid } = doc;
	try {
		let user = await Customer.findById(id).select({ preferredVendors: 1 });
		await user.preferredVendors.push(vendorid);
		const vendorList = await user.preferredVendors;
		
		await Customer.findByIdAndUpdate(id, { preferredVendors: vendorList });
		user = await Customer.findById(id).select({ preferredVendors: 1 });
		return user;
	} catch (err) {
		throw 'Error adding vendor';
	}
};

module.exports = UserService;
