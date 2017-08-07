'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmailSchema = new Schema({
  email: {type: String, required: true},
  create_time: {type: Date, default: Date.now, required: true}
})

var Email = mongoose.model('Email',EmailSchema);

module.exports = Email;