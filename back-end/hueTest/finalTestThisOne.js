var express = require('express');
var socket = require('socket.io');
var five = require('johnny-five'),
board = new five.Board();

// Init variabelen
var port = 5000;
var cooldown = 1500;
var red = 50;
var green = 50;
var blue = 50;
var timer = 30000;

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

    // Groene button 4 - 5
    var greenB1 = new five.Button(4);
    var greenL1 = new five.Led(5);
    var green1on = true;
    greenL1.on();
    greenB1.on("down", function(){
      if(green1on){
        green1on = false;
        greenL1.off();
        setTimeout(function(){
          greenL1.on();
          green1on = true;
        }, cooldown);
        green+= 20;
        red -= 7;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'green1',
          value: 4
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Gele button 6 - 7
    var yellowB1 = new five.Button(6);
    var yellowL1 = new five.Led(7);
    var yellow1on = true;

    yellowL1.on();
    yellowB1.on("down", function(){
      if(yellow1on){
        yellow1on = false;
        yellowL1.off();
        setTimeout(function(){
          yellowL1.on();
          yellow1on = true;
        }, cooldown);
        green -= 15;
        red -= 15;
        blue -= 15;
        io.sockets.emit('inputChange', {
          id: 'yellow1',
          value: 5
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Blauwe button 8 - 9
    var blueB1 = new five.Button(8);
    var blueL1 = new five.Led(9);
    var blue1on = true;

    blueL1.on();
    blueB1.on("down", function() {
      if(blue1on){
        blue1on = false;
        blueL1.off();
        setTimeout(function(){
          blueL1.on();
          blue1on = true;
        }, cooldown);
        green -= 7;
        red -= 7;
        blue += 20;
        io.sockets.emit('inputChange', {
          id: 'blue1',
          value: 6
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Rode button 10 - 11
    var redB1 = new five.Button(10);
    var redL1 = new five.Led(11);
    var red1on = true;

    redL1.on();
    redB1.on("down", function() {
      if(red1on){
        red1on = false;
        redL1.off();
        setTimeout(function(){
          redL1.on();
          red1on = true;
        }, cooldown);
        green -= 7;
        red += 20;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'red1',
          value: 7
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Witte button 12 - 13
    var whiteB1 = new five.Button(12);
    var whiteL1 = new five.Led(13);
    var white1on = true;

    whiteL1.on();
    whiteB1.on("down", function(){
      if(white1on){
        white1on = false;
        whiteL1.off();
        setTimeout(function(){
          whiteL1.on();
          white1on = true;
        }, cooldown);
        green += 15;
        red += 15;
        blue += 15;
        io.sockets.emit('inputChange', {
          id: 'white1',
          value: 8
        });
        // Hier kunnen extra functies
  
        //
      }

    });

    // Groene button 22 -23
    var greenB2 = new five.Button(22);
    var greenL2 = new five.Led(23);
    var green2on = true;

    greenL2.on();
    greenB2.on("down", function(){
      if(green2on){
        green2on = false;
        greenL2.off();
        setTimeout(function(){
          greenL2.on();
          green2on = true;
        }, cooldown);
        green += 20;
        red -= 7;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'green2',
          value: 9
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Gele button 24 - 25
    var yellowB2 = new five.Button(24);
    var yellowL2 = new five.Led(25);
    var yellow2on = true;

    yellowL2.on();
    yellowB2.on("down", function(){
      if(yellow2on){
        yellow2on = false;
        yellowL2.off();
        setTimeout(function(){
          yellowL2.on();
          yellow2on = true;
        }, cooldown);
        green -= 15;
        red -= 15;
        blue -= 15;
        io.sockets.emit('inputChange', {
          id: 'yellow2',
          value: 10
        });
        // Hier kunnen extra functies
  
        //
      }
    });
    // Blauwe button 26 - 27
    var blueB2 = new five.Button(26);
    var blueL2 = new five.Led(27);
    var blue2on = true;

    blueL2.on();
    blueB2.on("down", function(){
      if(blue2on){
        blue2on = false;
        blueL2.off();
        setTimeout(function(){
          blueL2.on();
          blue2on = true;
        }, cooldown);
        green -= 7;
        red -= 7;
        blue += 20;
        io.sockets.emit('inputChange', {
          id: 'blue2',
          value: 11
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Rode button 28 - 29
    var redB2 = new five.Button(28);
    var redL2 = new five.Led(29);
    var red2on = true;

    redL2.on();
    redB2.on("down", function(){
      if(red2on){
        red2on = false;
        redL2.off();
        setTimeout(function(){
          redL2.on();
          red2on = true;
        }, cooldown);
        green -= 7;
        red += 20;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'red2',
          value: 12
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Witte button 30 - 31
    var whiteB2 = new five.Button(30);
    var whiteL2 = new five.Led(31);
    var white2on = true;

    whiteL2.on();
    whiteB2.on("down", function(){
      if(white2on){
        white2on = false;
        whiteL2.off();
        setTimeout(function(){
          whiteL2.on();
          white2on = true;
        }, cooldown);
        green += 15;
        red += 15;
        blue += 15;
        io.sockets.emit('inputChange', {
          id: 'white2',
          value: 13
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Groene button 32 - 33
    var greenB3 = new five.Button(32);
    var greenL3 = new five.Led(33);
    var green3on = true;

    greenL3.on();
    greenB3.on("down", function(){
      if(green3on){
        green3on = false;
        greenL3.off();
        setTimeout(function(){
          greenL3.on();
          green3on = true;
        }, cooldown);
        green += 20;
        red -= 7;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'green3',
          value: 14
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Gele button 34 - 35
    var yellowB3 = new five.Button(34);
    var yellowL3 = new five.Led(35);
    var yellow3on = true;

    yellowL3.on();
    yellowB3.on("down", function(){
      if(yellow3on){
        yellow3on = false;
        yellowL3.off();
        setTimeout(function(){
          yellowL3.on();
          yellow3on = true;
        }, cooldown);
        green -= 15;
        red -= 15;
        blue -= 15;
        io.sockets.emit('inputChange', {
          id: 'yellow3',
          value: 15
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Blauwe button 36 - 37
    var blueB3 = new five.Button(36);
    var blueL3 = new five.Led(37);
    var blue3on = true;

    blueL3.on();
    blueB3.on("down", function(){
      if(blue3on){
        blue3on = false;
        blueL3.off();
        setTimeout(function(){
          blueL3.on();
          blue3on = true;
        }, cooldown);
        green -= 7;
        red -= 7;
        blue += 20;
        io.sockets.emit('inputChange', {
          id: 'blue3',
          value: 16
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Rode button 38 - 39
    var redB3 = new five.Button(38);
    var redL3 = new five.Led(39);
    var red3on = true;

    redL3.on();
    redB3.on("down", function(){
      if(red3on){
        red3on = false;
        redL3.off();
        setTimeout(function(){
          redL3.on();
          red3on = true;
        }, cooldown);
        green -= 7;
        red += 20;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'red3',
          value: 17
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Witte button 40 - 41
    var whiteB3 = new five.Button(40);
    var whiteL3 = new five.Led(41);
    var white3on = true;

    whiteL3.on();
    whiteB3.on("down", function(){
      if(white3on){
        white3on = false;
        whiteL3.off();
        setTimeout(function(){
          whiteL3.on();
          white3on = true;
        }, cooldown);
        green += 15;
        red += 15;
        blue += 15;
        io.sockets.emit('inputChange', {
          id: 'white3',
          value: 18
        });
        // Hier kunnen extra functies
  
        //
      }
    });

    // Groene button 42 - 43
    var greenB4 = new five.Button(42);
    var greenL4 = new five.Led(43);
    var green4on = true;

    greenL4.on();
    greenB4.on("down", function(){
      if(green4on){
        green4on = false;
        greenL4.off();
        setTimeout(function(){
          greenL4.on();
          green4on = true;
        }, cooldown);
        green += 20;
        red -= 7;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'green4',
          value: 19
        });
        // Hier kunnen extra functies
  
        //
      }
    });
    // Gele button 44 - 45
    var yellowB4 = new five.Button(44);
    var yellowL4 = new five.Led(45);
    var yellow4on = true;

    yellowL4.on();
    yellowB4.on("down", function(){
      if(yellow4on){
        yellow4on = false;
        yellowL4.off();
        setTimeout(function(){
          yellowL4.on();
          yellow4on = true;
        }, cooldown);
        green -= 15;
        red -= 15;
        blue -= 15;
        io.sockets.emit('inputChange', {
          id: 'yellow4',
          value: 20
        });
        // Hier kunnen extra functies
  
        //
      }
    });
    // Blauwe button 46 - 47
    var blueB4 = new five.Button(46);
    var blueL4 = new five.Led(47);
    var blue4on = true;

    blueL4.on();
    blueB4.on("down", function(){
      if(blue4on){
        blue4on = false;
        blueL4.off();
        setTimeout(function(){
          blueL4.on();
          blue4on = true;
        }, cooldown);
        green -= 7;
        red -= 7;
        blue += 20;
        io.sockets.emit('inputChange', {
          id: 'blue4',
          value: 21
        });
        // Hier kunnen extra functies
  
        //
      }
    });
    // Rode button 48 - 49
    var redB4 = new five.Button(48);
    var redL4 = new five.Led(49);
    var red4on = true;

    redL4.on();
    redB4.on("down", function(){
      if(red4on){
        red4on = false;
        redL4.off();
        setTimeout(function(){
          redL4.on();
          red4on = true;
        }, cooldown);
        green -= 7;
        red += 20;
        blue -= 7;
        io.sockets.emit('inputChange', {
          id: 'red4',
          value: 22
        });
        // Hier kunnen extra functies
  
        //
      }
    });
    // Witte button 50 - 51
    var whiteB4 = new five.Button(50);
    var whiteL4 = new five.Button(51);
    var white4on = true;

    whiteL4.on();
    whiteB4.on("down", function(){
      if(white4on){
        white4on = false;
        whiteL4.off();
        setTimeout(function(){
          whiteL4.on();
          white4on = true;
        }, cooldown);
        green += 15;
        red += 15;
        blue += 15;
        io.sockets.emit('inputChange', {
          id: 'white4',
          value: 23
        });
        // Hier kunnen extra functies
  
        //
      }
    });
    // Witte button 52 - 53
    var whiteB5 = new five.Button(52);
    var whiteL5 = new five.Button(53);
    var white5on = true;

    whiteL5.on();
    whiteB5.on("down", function(){
      if(white5on){
        white5on = false;
        whiteL5.off();
        setTimeout(function(){
          whiteL5.on();
          white5on = true;
        }, cooldown);
        green += 15;
        red += 15;
        blue += 15;
        io.sockets.emit('inputChange', {
          id: 'white5',
          value: 24
        });
        // Hier kunnen extra functies
  
        //
      }
    });
    // Mapping gedaan
    
    // Color fetch
    board.loop(timer, {
      // Philips hue fetch
    });
  });
});