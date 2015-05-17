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
// var AlchemyAPI = require("./alchemyapi");
// var alchemyapi = new AlchemyAPI()

var io  = require('socket.io');  
var server = io.listen(7000);
server.sockets.on('connection', function(socket) {  
    socket.emit('helo', {msg: 'welcome'});
    socket.on('user', function(data) {
        if (data.type == "client") {
            macbook_socket = socket;
        }
    });

    socket.on("next", function(data) {
        //console.log(data);
        console.log((data["Recognition"]));
        String testString = "George Washington was the first president. He helped America win the American Revolution. He also gave his Farewell Address."
        // if (democlientsocket != undefined) {
        //     democlientsocket.emit("next", {});
        // }           
    });

    socket.on("prev", function(data) {
        console.log("received prev");
        // if (democlientsocket != undefined) {
        //     democlientsocket.emit("prev", {});
        // }
    });
});

var macbook_socket = undefined;

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

//Go from homepage to homescreen
app.post("/login", function(req, res, next){
  if (req.body.username == "karthikmaiya" && req.body.password == "password") {
    var myUser = new User({
      username: req.body.username,
      password: req.body.username
    });

    var query  = User.where({ username: 'karthikmaiya', password: 'password' });
    query.findOne(function (err, user) {
      if (err) return handleError(err);
      // console.log(err);
      // console.log(user);
      if (user) {
       // console.log("alkjdalkjsd");
        res.render("card", {title: "Tenjin"});
      } else {
        console.log("didnt find anything")
        res.send("404 Error")
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
