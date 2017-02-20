var express = require('express');
var router = express.Router();
var authentication = require('../lib/userLib.js');

router.get('/main', authentication.ensureAuthenticated_admin,
                    authentication.ensureAdmin,
                    function(req, res){
  res.render('main', { title: 'Main Dashboard', class1: 'active', layout: 'dashboard'});
})
router.get('/clients', authentication.ensureAuthenticated_admin,
                    authentication.ensureAdmin,
                    function(req, res){
  res.render('clients', { title: 'Clients', class2: 'active', layout: 'dashboard'});
})
router.get('/products', authentication.ensureAuthenticated_admin,
                    authentication.ensureAdmin,
                    function(req, res){
  res.render('products', { title: 'Products', class3: 'active', layout: 'dashboard'});
})
router.get('/orders', authentication.ensureAuthenticated_admin,
                    authentication.ensureAdmin,
                    function(req, res){
  res.render('orders', { title: 'Orders', class4: 'active', layout: 'dashboard'});
})
router.get('/settings', authentication.ensureAuthenticated_admin,
                    authentication.ensureAdmin,
                    function(req, res){
  res.render('settings', { title: 'Settings', class5: 'active', layout: 'dashboard'});
})
router.get('/overview', authentication.ensureAuthenticated_admin,
              authentication.ensureAdmin,
              function(req, res){
  res.render('overview', { title: '', class6: 'active', layout: 'dashboard'})
})
router.get('/admins', authentication.ensureAuthenticated_admin,
              authentication.ensureAdmin,
              function(req, res){
  res.render('admins', { title: '', class7: 'active', layout: 'dashboard'})
})
router.get('/webdesigners', authentication.ensureAuthenticated_admin,
              authentication.ensureAdmin,
              function(req, res){
  res.render('webdesigners', { title: '', class8: 'active', layout: 'dashboard'})
})
router.get('/upload', authentication.ensureAuthenticated_admin,
              authentication.ensureAdmin,
              function(req, res){
  res.render('upload', { title: '', class9: 'active', layout: 'dashboard'})
})
router.get('/layout', authentication.ensureAuthenticated_admin,
              authentication.ensureAdmin,
              function(req, res){
  res.render('wlayout', { title: '', class10: 'active', layout: 'dashboard'})
})
module.exports = router;
