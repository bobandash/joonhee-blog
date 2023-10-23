var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("passport");
const jwtStrategry  = require("./strategies/jwt")

const connect_db = require('./utils/db')
require('dotenv').config()

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const mailingListRouter = require('./routes/mailing-list');
const postsRouter = require('./routes/posts');


connect_db();
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


passport.use(jwtStrategry);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/admin', adminRouter);
/* app.use('/mailing', mailingListRouter); */
app.use('/posts', postsRouter);

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
  res.sendStatus(err.status || 500);
});

module.exports = app;
