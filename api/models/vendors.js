const mongoose = require('mongoose');
const { Schema } = mongoose;

const VendorSchema = new Schema({
	fisrtname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		default: '0.0',
	},
	shopAddress: {
		type: String,
		required: true,
	},
	website: {
		type: String,
	},
	shopCoordinates: {
		lat: {
			type: Number,
		},
		lon: {
			type: Number,
		},
	},
	
});

module.exports = mongoose.model('Vendors', VendorSchema);
