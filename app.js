var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var expressValidator = require('express-validator');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var exphbs = require('express-handlebars');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var User = require('./models/user');
var Template = require('./models/template');
var authenticationCheck = require('./lib/userLib.js');
var index = require('./routes/index');
var users = require('./routes/users');
var inside = require('./routes/inside');
var adminDashboard = require('./routes/adminDashboard');

var app = express();

mongoose.connect('mongodb://sidahmed:11092000@ds151279.mlab.com:51279/sart', function(err, success){
  if(err) throw err;
  if(success){
    console.log('Connected to mongodb');
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine("hbs", exphbs({
    defaultLayout: "layout",
    extname: ".hbs",
    helpers: require("./public/javascripts/helpers.js").helpers, // same file that gets used on our client
    partialsDir: "views/partials/", // same as default, I just like to be explicit
}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.user = req.user || null

  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/section', inside);
app.use('/dashboard', adminDashboard);


// error handler
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']'
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    }
  }
}));

module.exports = app;
