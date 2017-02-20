var express = require('express');
var router = express.Router();
var authentication = require('../lib/userLib.js');
var dateTime = require('../lib/dateTime.js');
var Template = require('../models/template');

var isAuthenticated = authentication.ensureAuthenticated;

router.get('/', function(req, res, next){
  var date = dateTime.getDate;
    res.render('index', { layout: 'index', currentDate: date});
});
router.get('/services', function(req,res, next){
  res.render('services', { title: 'Services', active_services: true});
});
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About'});
});

module.exports = router;
