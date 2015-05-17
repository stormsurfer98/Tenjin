var express = require('express');
var path = require('path');
var User = require("./Models/user");
var Event = require("./Models/event");
var Term = require("./Models/term");
var Person = require("./Models/person");
var mongoose = require("mongoose");
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();


var db = mongoose.connect("localhost", "Tenjin");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes);

/* GET home page. */
app.post("/login", function(req, res, next){
  if (req.body.username == "karthikmaiya" && req.body.password == "password") {
    var myUser = new User({
      username: req.body.username,
      password: req.body.username
    });

    var query  = User.where({ username: 'karthikmaiya' });
    query.findOne(function (err, user) {
      if (err) return handleError(err);
      console.log(err);
      console.log(user);
      if (user) {
       console.log("alkjdalkjsd");
       res.send("done");
       newUser = new User({username: "bob", password: "hola"});
       newUser.save()
      } else {
        console.log("didnt find anything")
        res.send("whoops")
      }
    });
  };
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//app.listen(3000);
var debug = require('debug')('Tenjin:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

 var port = normalizePort(process.env.PORT || '3000');
 app.set('port', port);

/**
 * Create HTTP server.
 */

 var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

 function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
  ? 'Pipe ' + port
  : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
    case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
    default:
    throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

 function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
  ? 'pipe ' + addr
  : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
