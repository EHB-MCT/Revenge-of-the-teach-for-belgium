var express = require('express');
var socket = require('socket.io');
var five = require('johnny-five'),
board = new five.Board();

// Init variabelen
var port = 5000;
var step = 50;
var gradSequence = 0;
var gradSteps = 5;
var colorStep = 25;
var cooldown = 15000;

// Start alles als een Arduino bord gevonden wordt
board.on('ready', function(){
  // App setup
  var app = express();
  var server = app.listen(port, function(){
    console.log("listening to requests on port " + port);
  });

  // Static files
  app.use(express.static('public'));

  // Socket setup
  var io = socket(server);

  // Button mapping zodra io connection gemaakt is
  io.on('connection', function(socket){
    console.log("made socket connection to " + socket.id);

    // Button mapping

    // Set 1
    var S1b1 = new five.Button(22); // Set 1 button 1
    S1b1.on("down", function(){
      S1.off();
      S1ON = false;
      setTimeout(cooldown, function(){
        S1ON = true;
        S1.on();
      });
      io.sockets.emit('inputChange', {
        id: 0,
        button: "S1b1",
        buttonState: "down"
      });
    });
    var S1b2 = new five.Button(24); // Set 1 button 2
    S1b2.on("down", function(){
      S1.off();
      S1ON = false;
      setTimeout(cooldown, function(){
        S1ON = true;
        S1.on();
      });
      io.sockets.emit('inputChange', {
        id: 1,
        button: "S1b2",
        buttonState: "down"
      });
    });
    var S1b3 = new five.Button(26); // Set 1 button 3
    S1b3.on("down", function(){
      S1ON = false;
      S1.off();
      setTimeout(cooldown, function(){
        S1ON = true;
        S1.on();
      });
      io.sockets.emit('inputChange', {
        id: 2,
        button: "S1b3",
        buttonState: "down"
      });
    });
    var S1 = new five.Led(28); // Set 1 power supply
    var S1ON = true;

    // Set 2
    var S2b1 = new five.Button(30);
    S2b1.on("down", function(){
      S2ON = false;
      S2.off();
      setTimeout(cooldown, function(){
        S2ON = true;
        S2.on();
      });
      io.sockets.emit('inputChange', {
        id: 3,
        button: "S2b1",
        buttonState: "down"
      });
    });
    var S2b2 = new five.Button(32);
    S2b2.on("down", function(){
      S2ON = false;
      S2.off();
      setTimeout(cooldown, function(){
        S2ON = true;
        S2.on();
      });
      io.sockets.emit('inputChange', {
        id: 4,
        button: "S2b2",
        buttonState: "down"
      });
    });
    var S2b3 = new five.Button(34);
    S2b3.on("down", function(){
      S2ON = false;
      S2.off();
      setTimeout(cooldown, function(){
        S2ON = true;
        S2.on();
      });
      io.sockets.emit('inputChange', {
        id: 5,
        button: "S2b3",
        buttonState: "down"
      });
    });
    var S2 = new five.Led(36);
    var S2ON = true;

    // Set 3
    var S3b1 = new five.Button(38);
    S3b1.on("down", function(){
      S3ON = false;
      S3.off();
      setTimeout(cooldown, function(){
        S3ON = true;
        S3.on();
      });
      io.sockets.emit('inputChange', {
        id: 6,
        button: "S3b1",
        buttonState: "down"
      });
    });
    var S3b2 = new five.Button(40);
    S3b2.on("down", function(){
      S3ON = false;
      S3.off();
      setTimeout(cooldown, function(){
        S3ON = true;
        S3.on();
      });
      io.sockets.emit('inputChange', {
        id: 7,
        button: "S3b2",
        buttonState: "down"
      });
    });
    var S3b3 = new five.Button(42);
    S3b3.on("down", function(){
      S3ON = false;
      S3.off();
      setTimeout(cooldown, function(){
        S3ON = true;
        S3.on();
      });
      io.sockets.emit('inputChange', {
        id: 8,
        button: "S3b3",
        buttonState: "down"
      });
    });
    var S3 = new five.Led(44);
    var S3ON = true;

    // Set 4
    var S4b1 = new five.Button(23);
    S4b1.on("down", function(){
      S4ON = false;
      S4.off();
      setTimeout(cooldown, function(){
        S4ON = true;
        S4.on();
      });
      io.sockets.emit('inputChange', {
        id: 9,
        button: "S4b1",
        buttonState: "down"
      });
    });
    var S4b2 = new five.Button(25);
    S4b2.on("down", function(){
      S4ON = false;
      S4.off();
      setTimeout(cooldown, function(){
        S4ON = true;
        S4.on();
      });
      io.sockets.emit('inputChange', {
        id: 10,
        button: "S4b2",
        buttonState: "down"
      });
    });
    var S4b3 = new five.Button(27);
    S4b3.on("down", function(){
      S4ON = false;
      S4.off();
      setTimeout(cooldown, function(){
        S4ON = true;
        S4.on();
      });
      io.sockets.emit('inputChange', {
        id: 11,
        button: "S4b3",
        buttonState: "down"
      });
    }); 
    var S4 = new five.Led(29);
    var S4ON = true;

    // Set 5
    var S5b1 = new five.Button(31);
    S5b1.on("down", function(){
      S5ON = false;
      S5.off();
      setTimeout(cooldown, function(){
        S5ON = true;
        S5.on();
      });
      io.sockets.emit('inputChange', {
        id: 12,
        button: "S5b1",
        buttonState: "down"
      });
    });
    var S5b2 = new five.Button(33);
    S5b2.on("down", function(){
      S5ON = false;
      S5.off();
      setTimeout(cooldown, function(){
        S5ON = true;
        S5.on();
      });
      io.sockets.emit('inputChange', {
        id: 13,
        button: "S5b2",
        buttonState: "down"
      });
    });
    var S5b3 = new five.Button(35);
    S5b3.on("down", function(){
      S5ON = false;
      S5.off();
      setTimeout(cooldown, function(){
        S5ON = true;
        S5.on();
      });
      io.sockets.emit('inputChange', {
        id: 14,
        button: "S5b3",
        buttonState: "down"
      });
    });
    var S5 = new five.Led(37);
    var S5ON = true;

    // Set 6
    var S6b1 = new five.Button(39);
    S6b1.on("down", function(){
      S6ON = false;
      S6.off();
      setTimeout(cooldown, function(){
        S6ON = true;
        S6.on();
      });
      io.sockets.emit('inputChange', {
        id: 15,
        button: "S6b1",
        buttonState: "down"
      });
    });
    var S6b2 = new five.Button(41);
    S6b2.on("down", function(){
      S6ON = false;
      S6.off();
      setTimeout(cooldown, function(){
        S6ON = true;
        S6.on();
      });
      io.sockets.emit('inputChange', {
        id: 16,
        button: "S6b2",
        buttonState: "down"
      });
    });
    var S6b3 = new five.Button(43);
    S6b3.on("down", function(){
      S6ON = false;
      S6.off();
      setTimeout(cooldown, function(){
        S6ON = true;
        S6.on();
      });
      io.sockets.emit('inputChange', {
        id: 17,
        button: "S6b3",
        buttonState: "down"
      });
    });
    var S6 = new five.Led(45);
    var S6ON = true;

    // Set 7
    var S7b1 = new five.Button(46);
    S7b1.on("down", function(){
      S7ON = false;
      S7.off();
      setTimeout(cooldown, function(){
        S7ON = true;
        S7.on();
      });
      io.sockets.emit('inputChange', {
        id: 18,
        button: "S7b1",
        buttonState: "down"
      });
    });
    var S7b2 = new five.Button(48);
    S7b2.on("down", function(){
      S7ON = false;
      S7.off();
      setTimeout(cooldown, function(){
        S7ON = true;
        S7.on();
      });
      io.sockets.emit('inputChange', {
        id: 19,
        button: "S7b2",
        buttonState: "down"
      });
    });
    var S7b3 = new five.Button(47);
    S7b3.on("down", function(){
      S7ON = false;
      S7.off();
      setTimeout(cooldown, function(){
        S7ON = true;
        S7.on();
      });
      io.sockets.emit('inputChange', {
        id: 20,
        button: "S7b3",
        buttonState: "down"
      });
    });
    var S7 = new five.Led(49);
    var S7ON = true;

    // vloerknoppen
    var F1 = new five.Button(18);
    F1.on("down", function(){
      io.sockets.emit('inputChange', {
        id: 21,
        button: "F1",
        buttonState: "down"
      });
    });
    var F2 = new five.Button(19);
    F2.on("down", function(){
      io.sockets.emit('inputChange', {
        id: 22,
        button: "F2",
        buttonState: "down"
      });
    });
    var F3 = new five.Button(20);
    F3.on("down", function(){
      io.sockets.emit('inputChange', {
        id: 23,
        button: "F3",
        buttonState: "down"
      });
    });
    var F4 = new five.Button(21);
    F4.on("down", function(){
      io.sockets.emit('inputChange', {
        id: 24,
        button: "F4",
        buttonState: "down"
      });
    });

    // Ledstrips
    var strip1 = new five.Led(14);
    var strip2 = new five.Led(15);
    var strip3 = new five.Led(16);
    var strip = new five.Led(17);

    // RGB leds
    var RGB1 = new five.Led.RGB({
      pins: {
        red: 2,
        green: 3,
        blue: 4
      },
      on: true
    });

    var RGB2 = new five.Led.RGB({
      pins: {
        red: 5,
        green: 6,
        blue: 7
      },
      on: true
    });

    var RGB3 = new five.Led.RGB({
      pins: {
        red: 8,
        green: 9,
        blue: 10
      },
      on: true
    });

    var RGB4 = new five.Led.RGB({
      pins: {
        red: 11,
        green: 12,
        blue: 13
      },
      on: true
    });

    // Mapping gedaan

    // RGB color
    var color = {
      red: 255,
      green: 0,
      blue: 0
    };

    // RGB to string

    function RGBtostring(){
      var hexCode = `#`;
      var hexRed = color.red.toString(16);
      if(hexRed.length == 1){
        hexRed = `0${hexRed}`;
      }
    
      var hexGreen = color.green.toString(16);
      if(hexGreen.length == 1){
        hexGreen = `0${hexGreen}`;
      }
    
      var hexBlue = color.blue.toString(16);
      if(hexBlue.length == 1){
        hexBlue = `0${hexBlue}`;
      }
      hexCode += hexBlue;
      hexCode += hexGreen;
      hexCode += hexRed;
      return hexCode;
    }

    // gradient loop
    board.loop(step, function(){

      // Resets hier

      // Resets eindigen hier

      // Color R -> Y
      if(gradSequence === 0){
        if(color.green >= 255){
          color.green = 255;
          gradSequence++;
        }
        else {
          color.green += colorStep;
        }
      }
      // Color Y -> G
      if(gradSequence === 1){
        if(color.red <= 0){
          color.red = 0;
          gradSequence++;
        }
        else {
          color.red += colorStep;
        }
      }
      // Color G -> C
      if(gradSequence === 2){
        if(color.blue >= 255){
          color.blue = 255;
          gradSequence++;
        }
        else {
          color.blue += colorStep;
        }
      }
      // Color C -> B
      if(gradSequence === 3){
        if(color.green <= 0){
          color.green = 0;
          gradSequence++;
        }
        else {
          color.green -= colorStep;
        }
      }
      // Color B -> V
      if(gradSequence === 4){
        if(color.red >= 255){
          color.red = 255;
          gradSequence++;
        }
        else {
          color.red += colorStep;
        }
      }
      // Color V -> R
      if(gradSequence === 5){
        if(color.blue <= 0){
          color.blue = 0;
          gradSequence++;
        }
        else {
          color.blue -= colorStep;
        }
      }
      // Check on voor RGB1
      if(RGB1.on){
        RGB1.color(RGBtostring());
      }
      // Check on voor RGB2
      if(RGB2.on){
        RGB2.color(RGBtostring());
      }
      // Check on voor RGB3
      if(RGB3.on){
        RGB3.color(RGBtostring());
      }
      // Check on voor RGB4
      if(RGB4.on){
        RGB4.color(RGBtostring());
      }

      if(gradSequence > gradSteps){
        gradSequence = 0;
      }
    });
  });
});