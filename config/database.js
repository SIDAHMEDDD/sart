var mongoose = require('mongoose');

mongoose.connect('mongodb://sidahmed:11092000@ds151279.mlab.com:51279/sart', function(err, success){
  if(err) throw err;
  if(success){
    console.log('Connected to mongodb');
  }
});
