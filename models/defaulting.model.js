const mongoose = require('../config/database');
const Schema = mongoose.Schema;

DefautingSchema = new Schema({
  name: {
		type: String,
		trim: true,
		required: true
	},
	price: {
		type: Number,
		default: 0,
		trim: true,
		required: true
	},
	dueDate: {
		type: Date,
		trim: true,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updateAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Defaulting', DefautingSchema)