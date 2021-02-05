const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
		required: true,
	},
	measurementId: {
		type: Schema.Types.ObjectId,
		ref: 'Measurements',
	},
});

module.exports = mongoose.model('Customer', CustomerSchema);
