'use strict';

var express = require('express');
var controller = require('./email.controller');

var router = express.Router();

router.post('/sendEmail', controller.sendEmail);
router.get('/getEmailList', controller.getEmailList);
router.delete('/:id', controller.removeEmail);

module.exports = router;