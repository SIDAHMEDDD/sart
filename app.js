var express           = require('express');
var mongoose          = require('mongoose');
var path              = require('path');
var favicon           = require('serve-favicon');
var expressValidator  = require('express-validator');
var logger            = require('morgan');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var session           = require('express-session');
var MongoStore        = require('connect-mongo')(session);
var exphbs            = require('express-handlebars');

const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var User      = require('./models/user');
var Template  = require('./models/template');
var Order     = require('./models/order');
var Message   = require('./models/message');
var Cart      = require('./models/cart');

var userController     = require('./controllers/userController');
var templateController = require('./controllers/templateController');
var orderController    = require('./controllers/orderController');
var messageController  = require('./controllers/messageController');

var authenticationCheck = require('./lib/userLib.js');
var dateTime            = require('./lib/dateTime.js');
var errHandler          = require('./lib/errors.js');

var index           = require('./routes/index');
var users           = require('./routes/users');
var inside          = require('./routes/inside');
var adminDashboard  = require('./routes/adminDashboard');
var templates       = require('./routes/templates');

var count=0;

mongoose.connect('mongodb://sidahmed:11092000@ds151279.mlab.com:51279/sart');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine("hbs", exphbs(
  {
    defaultLayout: "layout",
    extname: ".hbs",
    helpers: require("./public/javascripts/helpers.js").helpers,
    partialsDir: "views/partials/",
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
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
  }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user    =  req.user || null;
  res.locals.session =  req.session;

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
app.use(function(req, res, next){
  res.status(404);

  if (req.accepts('html')) {
    res.render('error', { layout: 'error', error: '404'});
    return;
  }
  if (req.accepts('json')) {
    res.render('error', { layout: 'error', error: '404'});
    return;
  }
  res.type('txt').send('Not found');
});

module.exports = app;
