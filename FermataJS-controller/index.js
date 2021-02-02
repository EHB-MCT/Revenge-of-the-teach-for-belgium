var express = require('express');
var socket = require('socket.io');
var five = require('johnny-five');

board = new five.Board();

var port = 5000;

board.on('ready', () => {

  // App setup
  var app = express();
  var server = app.listen(port, () => {
    console.log("listening to requests on port " + port);
  });

  // Static files
  app.use(express.static('public'));

  // Socket setup
  var io = socket(server, {
    pingInterval: 1000,
    pintTimeout: 2000
  });

  var clients = {};

  var button = new five.Button(2);
  var button2 = new five.Button(4);

  board.repl.inject({
    button: button,
    button2: button
  });

  button.on("down", () => {
    io.sockets.emit('inputChange', {
      button: "down"
    });
  });

  button2.on("down", () => {
    io.sockets.emit('inputChange', {
      button: "up"
    });
  });


  io.on('connection', (socket) => {
    console.log('made socket connection to ' + socket.id);
    clients[socket.id] = socket;

    socket.on('disconnect', function () {
      console.log("disconnect: ", socket.id);
      delete clients[socket.id];
      socket.removeAllListeners();
      socket.disconnect();
    });
  });
});