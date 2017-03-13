var express         = require('express');
var router          = express.Router();
var User            = require('../models/user');
var Template        = require('../models/template');

router.get('/', function(req, res){
  Template.find({}, function(err, docs){
    res.render('templates/main',
     {
       title: 'Our templates gallery',
       class3: 'active',
       templates: docs
     }
    );
  });
});
router.get('/wordpress', function(req, res){
  Template.find({category: "Wordpress Theme"}, function(err, docs){
    res.render('templates/wordpress',
      {
        title: 'Wordpress themes',
        class3: 'active',
        templates: docs
      }
    );
  });
});
router.get('/blogger', function(req, res){
  Template.find({category: "Blogger Template"}, function(err, docs){
    res.render('templates/blogger',
      {
        title: 'Blogger templates',
        class3: 'active',
        templates: docs
      }
    );
  });
});
router.get('/websites', function(req, res){
  Template.find({category: "Website Template"}, function(err, docs){
    res.render('templates/websites',
     {
       title: 'Website templates',
       class3: 'active',
       templates: docs
     }
    );
  });
});
router.get('/joomla', function(req, res){
  Template.find({category: "Joomla Template"}, function(err, docs){
    res.render('templates/joomla',
     {
       title: 'Joomla templates',
       class3: 'active',
       templates: docs
     }
    );
  });
});
router.get('/covers', function(req, res){
  Template.find({category: "Cover"}, function(err, docs){
    res.render('templates/fbyt',
     {
       title: 'Facebook and youtube covers',
       class3: 'active',
       templates: docs
     }
    );
  });
});
router.get('/bootstrapthemes', function(req, res){
  Template.find({ category : "Bootstrap Theme" }, function(err, docs){
    res.render('templates/bootstrap',
      {
        title: 'Bootstrap themes',
        class3: 'active',
        templates: docs
      }
    );
  });
});
router.get('/view/:id', function(req, res){
  var id = req.params.id;
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
