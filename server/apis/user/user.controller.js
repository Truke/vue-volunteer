'use strict'

var mongoose = require('mongoose');
var User = mongoose.model('User');
var md5 = require('md5');
var safeWord = '';

// 登录
exports.login = function(req, res, next) {
	
	var userName = req.body.userName
	User.find({'username': userName}).exec(function(err, doc) {
		if (doc == '') {
			res.send({success:false, msg: '用户不存在'});
		}else {
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
	req.session.destroy(function(e){
		if(e){
			return res.send({success: false, msg: '退出登录失败'})
		}
		res.cookie('isLogin','0' , {expires: 0});
		res.send({success: true, msg: '登出成功'});
	})
}

