'use strict'

var mongoose = require('mongoose');
var Email = mongoose.model('Email');
var nodemailer  = require("nodemailer");
var user = '635133526@qq.com';//你的邮箱账户
var pass = 'imsbvdftghxpbbdg';//你的邮箱密码或者独立授权码
//var trimHtml = require('trim-html');
var smtpTransport = nodemailer.createTransport({
    pool: true,
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass
  }
});

exports.sendEmail = function(req, res, next) {
  var email = req.body.email;
  // smtpTransport.sendMail({
  //  from: user,
  //  to: email,
  //  subject: '谢谢您订阅volunteer!',
  //  text: '谢谢您订阅volunteer!',
  //  html: '<h1><b>谢谢您订阅volunteer，我们将以最大的热情服务于您!</b></h1><p>如果您不需要订阅，请点击上方退订</p>'
  // }, function(err, response) {
  //  console.log(err, response)
  //  if(err) {
  //    return res.send({success: false, msg: '订阅失败'})
  //  }
    Email.create({
      email: email
    }, function(err, doc) {
      if (err) {
        return res.send({success: false, msg: '订阅失败'})
      }
      res.send({success: true, msg: '订阅成功'})
    })
  // })
}


// 获取邮件列表
exports.getEmailList = function(req, res, next) {
  
  var currentPage = (parseInt(req.query.currentPage) > 0) ? parseInt(req.query.currentPage) : 1;
  var itemsPerPage = 10;
  var startRow = (currentPage - 1) * itemsPerPage;
  var sort = 'create_time';
  sort = '-' + sort;
  Email.find()
       .select('email create_time')
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

//删除邮件
exports.removeEmail = function(req, res) {
  var id = req.params.id;
  Email.findByIdAndRemove(id).exec(function(err) {
    if (err) {
      res.send({success: false, msg: '删除失败' + err});
    }else {
      Email.find()
           .sort('-create_time')
           .exec(function(err, list) {
            res.send({success: true, msg: '删除成功', data: list});
          })
    }
  })
}
