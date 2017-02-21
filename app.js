var express           = require('express');
var path              = require('path');
var favicon           = require('serve-favicon');
var expressValidator  = require('express-validator');
var logger            = require('morgan');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var session           = require('express-session');
var exphbs            = require('express-handlebars');

const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var User      = require('./models/user');
var Template  = require('./models/template');
var Order     = require('./models/order');
var Message   = require('./models/message');

var userController     = require('./controllers/userController');
var templateController = require('./controllers/templateController');
var orderController    = require('./controllers/orderController');
var messageController  = require('./controllers/messageController');

var authenticationCheck = require('./lib/userLib.js');
var dateTime            = require('./lib/dateTime.js');

var index           = require('./routes/index');
var users           = require('./routes/users');
var inside          = require('./routes/inside');
var adminDashboard  = require('./routes/adminDashboard');
var templates       = require('./routes/templates');

var databaseConfig = require('./config/database');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine("hbs", exphbs(
  {
    defaultLayout: "layout",
    extname: ".hbs",
    helpers: require("./public/javascripts/helpers.js").helpers, // same file that gets used on our client
    partialsDir: "views/partials/", // same as default, I just like to be explicit
  }
));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(
  {
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user || null

  next();
});

app.use('/',          index);
app.use('/users',     users);
app.use('/section',   inside);
app.use('/dashboard', adminDashboard);
app.use('/templates', templates);

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
