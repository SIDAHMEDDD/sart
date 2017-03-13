var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	country: {
		type: String
	},
	city: {
		type: String,
		default: false
	},
	postalcode: {
		type: Number
	},
	userType: {
		type: String,
		default: 'Normal'
	}
});

var User = module.exports = mongoose.model('user', UserSchema);