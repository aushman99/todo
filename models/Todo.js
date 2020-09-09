const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	creator: {
		type: String,
		required: true
	},
	duration: Number,
	createdAt: {
		type:Date,
		default: Date.now
	},
	expireAt: Date
		});

module.exports = mongoose.model('Todo', TodoSchema);