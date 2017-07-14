'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	message: {type: String, required: true},
	create_time: {type: Date, default: Date.now, required: true}
})

var Contact = mongoose.model('Contact',ContactSchema);

module.exports = Contact;