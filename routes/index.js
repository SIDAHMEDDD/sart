var express = require('express');
var router = express.Router();
var authentication = require('../lib/userLib.js');
var dateTime = require('../lib/dateTime.js');
var Template = require('../models/template');

var isAuthenticated = authentication.ensureAuthenticated;

router.get('/', function(req, res, next){
  var date = dateTime.getDate;
    res.render('index', { layout: 'index', currentDate: date, class1: 'active',});
});
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About', class4: 'active'});
});

module.exports = router;
