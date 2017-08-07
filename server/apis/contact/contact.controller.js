'use strict'

var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');
//var trimHtml = require('trim-html');

// 发送
exports.addContact = function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	Contact.create({
		name: name,
		email: email,
		message: message
	}, function(err, doc) {
		if (err) {
			res.send({success: false, msg: '发送失败 ' + err});
		}else{
			res.send({success: true, msg: '发送成功', data: doc});
		}
	})
}


// 获取反馈列表
exports.getContactList = function(req, res, next) {
	
	var currentPage = (parseInt(req.query.currentPage) > 0) ? parseInt(req.query.currentPage) : 1;
	var itemsPerPage = (parseInt(req.query.itemsPerPage) > 0) ? parseInt(req.query.itemsPerPage) : 10;
	var startRow = (currentPage - 1) * itemsPerPage;
	var sort = 'create_time';
	sort = '-' + sort;
	Contact.find()
		   .select('name email message create_time')
		   .skip(startRow)
		   .limit(itemsPerPage)
		   .sort(sort)
		   .lean()
		   .exec(function(err, list) {
		   		if (err) {
		   			res.send({success: false, msg: '获取失败' + err});
		   		}else {
		   			res.send({success: true, msg: '获取成功', data: list});
		   		}
		   })
}

//删除反馈
exports.removeContact = function(req, res) {
	var id = req.params.id;
	Contact.findByIdAndRemove(id).exec(function(err) {
		if (err) {
			res.send({success: false, msg: '删除失败' + err});
		}else {
			Contact.find()
				   .sort('-create_time')
				   .exec(function(err, list) {
						res.send({success: true, msg: '删除成功', data: list});
					})
		}
	})
}
