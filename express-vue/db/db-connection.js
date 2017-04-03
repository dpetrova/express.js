var mongoose = require('mongoose')

// TODO: setup databas
var CONNECTION_PATH = 'mongodb://127.0.0.1/ukigames-site'

mongoose.Promise = global.Promise;

var CREDENTIALS = {} // { user : 'admin', pass : '1234' }

// connect to MongoDB
mongoose.connect(CONNECTION_PATH, CREDENTIALS)

// GLOBAL
DATABASE_CONNECTION = mongoose.connection

// On error handler
DATABASE_CONNECTION.on('error', function (err) {
  console.log('connection error:', err.message)
})

// On successful connect
DATABASE_CONNECTION.once('open', function callback () {
  console.log('Connected to MongoDB at ' + CONNECTION_PATH)
})