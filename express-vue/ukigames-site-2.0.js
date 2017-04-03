//Connect to DB
require("./db/db-connection")

var express = require('express')
var path = require('path')
var expressVue = require('express-vue')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var validator = require('express-validator')
var fs = require('fs')

mongoose.Promise = global.Promise

var routes = require('./routes/home')
var gamesRoutes = require('./routes/games');

var app = express()

IS_PRODUCTION = app.get('env') === 'production'

app.use( require("compression")() )

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', __dirname + '/views');
app.set('vue', {
  componentsDir: __dirname + '/views/components',
  defaultLayout: 'layout'
});

// uncomment after placing your favicon in /public
//app.use(favicon(Path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser())
app.use(require('stylus').middleware(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')))

//PATH to default upload location
FILES_PATH = path.join(__dirname, 'public/files/')
PUBLIC_PATH = path.join(__dirname, 'public/')
//Create it if it doesn't exist
if( !fs.existsSync( FILES_PATH ) ) fs.mkdirSync( FILES_PATH )


//the order of the routes is important!
app.use('/games', gamesRoutes)
app.use('/', routes)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404; 
  next(err);
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  })
})

var listener = app.listen( 3003, function(){
  console.log("Uki Games site 2.0 started on " +  listener.address().port )
})
