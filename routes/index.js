var express = require('express');
var router = express.Router();
//require("User");
var User = require("./../Models/user");
var myUser = new User;




router.get('/', function(req, res, next) {
  res.render('card', { title: 'Tenjin' });
});

module.exports = router;