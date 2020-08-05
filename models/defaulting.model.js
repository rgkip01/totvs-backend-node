const mongoose = require('../config/database');
const Schema = mongoose.Schema;

DefautingSchema = new Schema({
  name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		default: 0,
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