var express         = require('express');
var router          = express.Router();
var authentication  = require('../lib/userLib.js');
var User            = require('../models/user');
var Template        = require('../models/template');
var Cart            = require('../models/cart');

router.get('/', function(req, res, next){
  Template.find({}, function(err, docs){
    res.render('templates/main',
     {
       title: 'Our templates gallery',
       class3: 'active',
       templates: docs
     }
    );
  })
});
router.get('/wordpress', function(req, res, next){
  Template.find({category: "Wordpress Theme"}, function(err, docs){
    res.render('templates/wordpress',
      {
        title: 'Wordpress themes',
        class3: 'active',
        templates: docs
      }
    );
  })
});
router.get('/blogger', function(req, res, next){
  Template.find({category: "Blogger Template"}, function(err, docs){
    res.render('templates/blogger',
      {
        title: 'Blogger templates',
        class3: 'active',
        templates: docs
      }
    );
  })
});
router.get('/websites', function(req, res, next){
  Template.find({category: "Website Template"}, function(err, docs){
    res.render('templates/websites',
     {
       title: 'Website templates',
       class3: 'active',
       templates: docs
     }
    );
  })
});
router.get('/joomla', function(req, res, next){
  Template.find({category: "Joomla Template"}, function(err, docs){
    res.render('templates/joomla',
     {
       title: 'Joomla templates',
       class3: 'active',
       templates: docs
     }
    );
  })
});
router.get('/covers', function(req, res, next){
  Template.find({category: "Cover"}, function(err, docs){
    res.render('templates/fbyt',
     {
       title: 'Facebook and youtube covers',
       class3: 'active',
       templates: docs
     }
    );
  })
});
router.get('/bootstrapthemes', function(req, res, next){
  Template.find({ category : "Bootstrap Theme" }, function(err, docs){
    res.render('templates/bootstrap',
      {
        title: 'Bootstrap themes',
        class3: 'active',
        templates: docs
      }
    );
  })
});
router.get('/view/:id', function(req, res, next){
  var id = req.params.id
  Template.findById(id, function(err, docs){
    Template.find({ category: docs.category }, function(err, related){
      res.render('templates/view',
        {
          title: docs.name,
          template: docs,
          related: related
        }
      );
    }).limit(3);
  });
});

module.exports = router;
