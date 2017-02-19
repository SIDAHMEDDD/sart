var express = require('express');
var router = express.Router();
var authentication = require('../lib/userLib.js');

var isAuthenticated = authentication.ensureAuthenticated;

router.get('/', function(req, res, next){
    res.render('index', { layout: 'index'});
});
router.get('/templates', function(req, res, next){
  res.render('templates', { title: 'Our templates gallery'});
});
router.get('/templates/wordpress', function(req, res, next){
  res.render('wordpress', { title: 'Wordpress themes'});
});
router.get('/templates/blogger', function(req, res, next){
  res.render('blogger', { title: 'Blogger templates'});
});
router.get('/templates/websites', function(req, res, next){
  res.render('websites', { title: 'Website templates'});
});
router.get('/templates/joomla', function(req, res, next){
  res.render('joomla', { title: 'Joomla templates'});
});
router.get('/templates/covers', function(req, res, next){
  res.render('fbyt', { title: 'Facebook and youtube covers'});
});
router.get('/templates/bootstrapthemes', function(req, res, next){
  res.render('bootstrap', { title: 'Bootstrap themes'});
});
router.get('/services', function(req,res, next){
  res.render('services', { title: 'Services', active_services: true});
});
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About'});
});

module.exports = router;
