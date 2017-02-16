var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title: 'SART, big gallery of websites.' });
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
  res.render('services', { title: 'Services'});
});
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About'});
});
router.get('/login', function(req, res, next){
  res.render('login', { title: 'Login', layout: 'login'});
});
module.exports = router;
