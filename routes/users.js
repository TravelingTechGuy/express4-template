/**
 * Users routes
 */

'use strict';

var router = require('express').Router(),
	debug = require('debug')('users'),
	model = require('../models/usersModel');

/* GET users listing. */
router.get('/', function(req, res) {
	var users = model.getUsers();
	debug('users: %s', users);
	res.send(users);
});

module.exports = router;
