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

/* 

const Tonal                           = require("tonal");
const SerialPort                      = require('serialport')
const Speaker                         = require('audio-speaker/stream');
const Generator                       = require('audio-generator/stream');


const { fork }                        = require('child_process');
const forked                          = fork('FermataJS-controller\run_genie.js');

const buttonMap                       = new Map();
const pressedMap                      = new Map();

let LOWEST_NOTE                       = 24;
let NUM_CHANNELS                      = 3;
let NUM_BUTTONS                       = 25;
let genieReady                        = false;
let currentNotes                      = [];
let processing                        = false;

forked.on('message', (msg) => {
  if (msg.genieReady == true) {
    genieReady = true;
  } else {
    noteOn(msg.note + LOWEST_NOTE, msg.button)
  }
  processing = false;
});

let channelMap = new Map();

for (let i = 0; i < NUM_CHANNELS; i++) {
  channelMap.set(i, new Map())
  for (let j = 0; j < NUM_BUTTONS; j++) {
    channelMap.get(i).set(j, []);
  }
}


handleButtonValue = function(button, value) {
  if (!genieReady) {
    // Wait for Tensorflow to load Piano Genie network
    return;
  }

  if (pressedMap.has(button)) {
    if (pressedMap.get(button) != value) {
      if (!value) {
        if (!processing) {
          processing = true;
          forked.send({note: button})
        }
      } else {
        noteOff(button)
      }
    }
  } else {
    if (!value) {
      forked.send({note: button})
    } else {
      noteOff(button)
    }
  }
  pressedMap.set(button, value);
}

noteOn = function(note, button) {
  // Add to current list of output notes
  currentNotes.push(note);
  buttonMap.set(button, note)
}

noteOff = function(button) {
  if (buttonMap.has(button)) {
    let note = buttonMap.get(button)
    currentNotes.splice(currentNotes.indexOf(note), 1);
    buttonMap.delete(button);
  }
}

startAudioOutput = function() {
  let stream = Generator(function (time) {
      var τ = Math.PI * 2;
      let notesToPlay = []
      for (let buttonMapKey of buttonMap.keys()) {
        let frequency = Tonal.Note.freq(Tonal.Note.fromMidi(buttonMap.get(buttonMapKey)))
        notesToPlay.push(Math.sin(τ * time * frequency))
      }
      return notesToPlay;
  })

  stream.pipe(Speaker());
}

startAudioOutput();

process.on('exit', function(code) {
  keyboard.close();
  forked.kill();

  // Turn off any stray notes
  for (let i = 0 ; i < NUM_BUTTONS; i++) {
    noteOff(i)
  }

  return console.log(`About to exit with code ${code}`);
});
 */