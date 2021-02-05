const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const MeasurementSchema = new Schema({
	bust: {
		type: Number,
		required: true,
	},
	shoulder: {
		type: Number,
		required: true,
	},
	back: {
		type: Number,
		required: true,
	},
	short_sleeve: {
		type: Number,
		required: true,
	},
	long_sleeve: {
		type: Number,
		required: true,
	},
	shirt: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Measurements', MeasurementSchema);
