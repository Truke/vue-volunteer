'use strict'

module.exports = function(app) {
	app.use('/api/contact', require('./apis/contact'));
	app.use('/api/user', require('./apis/user'));
}