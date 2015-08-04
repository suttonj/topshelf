'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nodeRestful = require('node-restful');

var _nodeRestful2 = _interopRequireDefault(_nodeRestful);

var _scriptsRoutesJs = require('./scripts/routes.js');

var _scriptsRoutesJs2 = _interopRequireDefault(_scriptsRoutesJs);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

//import contentsRoute from './routes/contents';
//import ContentSchema from './models/content';

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var app = (0, _express2['default'])();

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }
// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use((0, _morgan2['default'])('dev'));
app.use(_bodyParser2['default'].json());
app.use(_bodyParser2['default'].urlencoded({ extended: false }));
app.use((0, _cookieParser2['default'])());
// app.use(express.static(path.join(__dirname, 'public')));

app.use((0, _cors2['default'])());

app.use(function (req, res, next) {
  var router = _reactRouter2['default'].create({ location: req.url, routes: _scriptsRoutesJs2['default'] });

  router.run(function (Handler, state) {
    var html = _react2['default'].renderToString(_react2['default'].createElement(Handler, null));
    return res.send(htm);
  });
});

//app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

exports['default'] = app;
module.exports = exports['default'];