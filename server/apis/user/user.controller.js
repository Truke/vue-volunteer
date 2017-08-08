'use strict'

var mongoose = require('mongoose');
var User = mongoose.model('User');
var md5 = require('md5');
var fs = require('fs');
var captcha = require('trek-captcha');


var safeWord = '';

//
exports.getCode = function(req, res, next) {
	captcha().then(function(data){
		fs.createWriteStream('static/code.gif').on('finish', function () {
			req.session.regenerate(function(e){
				if(e){
					return res.send({success: false, msg: '获取验证码失败'})
				}
				req.session.code = data.token;
				res.send({success: true, msg: '获取验证码成功'})
			})
    }).end(data.buffer);
	})
}

// 登录
exports.login = function(req, res, next) {
	var userName = req.body.userName
	var code = req.body.code
	User.find({'username': userName}).exec(function(err, doc) {
		if (doc == '') {
			res.send({success:false, msg: '用户不存在'});
		} else if (code !== req.session.code) {
			res.send({success: false, msg: '验证码错误'});
		} else {
			if (doc[0].password == md5(safeWord + req.body.password)) {
				req.session.regenerate(function(e){
					if(e){
						return res.send({success: false, msg: '登录失败'})
					}
					req.session.isLogin = 1;
					req.session.username = userName;
					res.cookie('isLogin', '1', { expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7), httpOnly: true });
					res.send({success: true, msg: '登录成功'});
				})
			}else{
				res.send({success: false, msg: '密码错误'})
			}
		}
	})
}

exports.checkLogin = function(req, res) {
	
	if(req.session.isLogin) {
		res.send({success:true,msg:'已登录',user:req.session.userName})
	}else{
		res.send({success:false,msg:'未登录'})
	}
}

// 登出
exports.logout = function(req, res) {
	req.session.isLogin = 0;
	req.session.username = null;
	req.session.destroy(function(e){
		if(e){
			return res.send({success: false, msg: '退出登录失败'})
		}
		res.cookie('isLogin','0' , {expires: 0});
		res.send({success: true, msg: '登出成功'});
	})
}

