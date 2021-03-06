var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const nunjucks = require('nunjucks');
var logger = require('morgan');
const dotenv = require('dotenv');
const passport = require('passport');
const MySQLStore = require('express-mysql-session')(session);

dotenv.config();

const home = require('./routes');
const { sequelize } = require('./models/table');
const passportConfig = require('./passport');

var app = express();

passportConfig();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

nunjucks.configure('views', {
  express: app,
  watch: true,
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  store: new MySQLStore({
    host    : process.env.SESSIONSTORE_HOST,
    port    : process.env.SESSIONSTORE_PORT,
    user    : process.env.SESSIONSTORE_USER,
    password: process.env.SESSIONSTORE_PASSWORD,
    database: process.env.SESSIONSTORE_DATABASE,
    clearExpired: true,
    checkExpirationInterval: process.env.SESSIONSTORE_CHECKEXPIRATIONINTERVAL
  }),
  cookie: {
    httpOnly: true,
    secure: false,    
  },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
