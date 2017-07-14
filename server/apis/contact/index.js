'use strict';

var express = require('express');
var controller = require('./contact.controller');

var router = express.Router();

router.post('/sendContact', controller.addContact);
router.get('/getContactList', controller.getContactList);
router.delete('/:id', controller.removeContact);

module.exports = router;