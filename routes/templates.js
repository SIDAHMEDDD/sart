var express = require('express');
var router = express.Router();
var authentication = require('../lib/userLib.js');
var User = require('../models/user');
var Template = require('../models/template');

router.get('/', function(req, res, next){
  Template.find({}, function(err, docs){
    res.render('templates', { title: 'Our templates gallery', class3: 'active', templates: docs});
  })
});
router.get('/wordpress', function(req, res, next){
  Template.find({category: "wordpress"}, function(err, docs){
    res.render('wordpress', { title: 'Wordpress themes', class3: 'active', templates: docs});
  })
});
router.get('/blogger', function(req, res, next){
  Template.find({category: "blogger"}, function(err, docs){
    res.render('blogger', { title: 'Blogger templates', class3: 'active', templates: docs});
  })
});
router.get('/websites', function(req, res, next){
  Template.find({category: "websites"}, function(err, docs){
    res.render('websites', { title: 'Website templates', class3: 'active', templates: docs});
  })
});
router.get('/joomla', function(req, res, next){
  Template.find({category: ""}, function(err, docs){
    res.render('joomla', { title: 'Joomla templates', class3: 'active', templates: docs});
  })
});
router.get('/covers', function(req, res, next){
  Template.find({category: "covers"}, function(err, docs){
    res.render('fbyt', { title: 'Facebook and youtube covers', class3: 'active', templates: docs});
  })
});
router.get('/bootstrapthemes', function(req, res, next){
  Template.find({category: "bootstrap"}, function(err, docs){
    res.render('bootstrap', { title: 'Bootstrap themes', class3: 'active', templates: docs});
  })
});

module.exports = router;