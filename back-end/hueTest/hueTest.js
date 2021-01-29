'use strict';
// Declaratie van Arduino bord en inputs/outputs
let five = require("johnny-five"),
board, buttonR, buttonB, buttonY, buttonG, buttonP, buttonReset, buttonRave, breadOne;

const fetch = require("node-fetch");

const host = "http://192.168.1.115"; // IP adres Philips Hue bridge
const username = "5Jgaedon0HXLnePLPgxWILxb42n5mcf08TRCsua7"; // Account ID op Philips Hue bridge
const lampID = 3; // ID van de lamp die we willen besturen
const url = `${host}/api/${username}/lights/${lampID}/state`; // url om naar te fetchen om het licht aan te passen

// variabelen voor dimmen van het licht
let lightBriMin = 51;
let timer = 3000;

// variabele voor noodstop
let stop = false;

// Bord definieren
board = new five.Board();

// Rave variabelen
let sequence = 0;
let rave = false;
let step = 750;

// Inputs en outputs definieren zodra het bord opgestart is
board.on("ready", async function(){

  breadOne = new five.Led(40);
  buttonP = new five.Button(42);
  buttonR = new five.Button(44);
  buttonB = new five.Button(46);
  buttonY = new five.Button(50);
  buttonG = new five.Button(52);
  buttonReset = new five.Button(22);
  buttonRave = new five.Button(24);


  // Breadboard aanzetten
  breadOne.on();

  buttonReset.on("down", () => { // Reset toggle: je kan op dezelfde knop duwen om het volledige systeem aan en uit te zetten
    stop = !stop; 

    if(stop){ // eerste keer op de knop gedrukt => alles gaat uit
      breadOne.off(); // breadboard af
      fetch(url, { // PUT request naar Philips Hue om de lamp uit te zetten
        method: 'PUT',
        body: JSON.stringify({
          "on": false
        })
      });
    }
    else { // tweede keer op de knop gedrukt => alles gaat weer aan
      breadOne.on(); // breadboard aan
      fetch(url, { // PUT request naar Philips Hue om de lamp weer aan te zetten
        method: 'PUT',
        body: JSON.stringify({
          "on": true
        })
      });
    }
  });

    buttonR.on("down", () => { // Lamp op rood zetten en vervolgens laten dimmen
      breadOne.off(); // Breadboard uit zetten zodat er geen input meer kan komen voor een bepaalde tijd
      setTimeout(() => {breadOne.on();}, timer); // na een bepaalde tijd weer aan zetten
        for(var i = 255; i >= lightBriMin; i-= 10){ // loop om de lamp te laten dimmen
          fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              "on": true,
              "hue": 65179,
              "bri": i
            })
          });
        }
        
    });
  
  

  buttonB.on("down", () => { // idem voor blauw
    breadOne.off();
    setTimeout(() => {breadOne.on();}, timer);
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "on": true,
          "hue": 45968,
          "bri": i
        })
      });
    }
    
  });

  buttonP.on("down", () => { // idem voor paars
    breadOne.off();
    setTimeout(() => {breadOne.on();}, timer);
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "on": true,
          "hue": 49703,
          "bri": i
        })
      });
    }
  });

  buttonY.on("down", () => { // idem voor geel
    breadOne.off();
    setTimeout(()=> {breadOne.on();}, timer);
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "on": true,
          "hue": 9676,
          "bri": i
        })
      });
    }
  });

  buttonG.on("down", () => { // idem voor groen
    breadOne.off();
    setTimeout(()=>{breadOne.on();}, timer)
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "on": true,
          "hue": 23114,
          "bri": i
        })
      });
    }
  });

  buttonRave.on("down", () => {
    rave = !rave;
  });

  board.loop(step, () => {
    if(rave){
      switch(sequence){
        case 0:{
          fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              "on": true,
              "hue": 45968,
              "bri": 254
            })
          });
          break;
        }
        case 1:{
          fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              "on": true,
              "hue": 65179,
              "bri": 254
            })
          });
          break;
        }
        case 2:{
          fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              "on": true,
              "hue": 9676,
              "bri": 254
            })
          });
          break;
        }
        case 3: {
          fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              "on": true,
              "hue": 23114,
              "bri": 254
            })
          });
          break;
        }
        case 4: {
          fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              "on": true,
              "hue": 49703,
              "bri": 254
            })
          });
          break;
        }
      }
    }

    sequence++;
    if(sequence > 4){
      sequence = 0;
    }
  })
});
