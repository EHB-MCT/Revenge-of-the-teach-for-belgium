'use strict';
var five = require("johnny-five"),
board, buttonR, buttonB, buttonY, buttonG, buttonP, potentio, breadOne;

const fetch = require("node-fetch");
const host = "http://192.168.1.119";
const username = "5Jgaedon0HXLnePLPgxWILxb42n5mcf08TRCsua7"; // dees mss ook
const lampID = 3;
const hueUrl = `${host}/api/${username}/lights/${lampID}`;
const url = `${hueUrl}/state`;

let lightBriMin = 51;
let timer = 3000;

let activeR = true;
let activeB = true;
let activeG = true;
let activeY = true;
let activeP = true;

let potVal = 0;
let potBuffer = 20;

board = new five.Board();

board.on("ready", async function(){

  breadOne = new five.Led(40);
  buttonP = new five.Button(42);
  buttonR = new five.Button(44);
  buttonB = new five.Button(46);
  buttonY = new five.Button(50);
  buttonG = new five.Button(52);
  potentio = new five.Sensor("A7");

  breadOne.on();
  
  board.repl.inject({
    button: buttonR,
    button: buttonG,
    button: buttonY,
    button: buttonB,
    button: buttonP,
    Led: breadOne
  });

    buttonR.on("down", async () => {
      breadOne.off();
      setTimeout(() => {breadOne.on();}, timer);
        for(var i = 255; i >= lightBriMin; i-= 10){
          fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              "hue": 65179,
              "bri": i
            })
          });
        }
        
    });
  
  

  buttonB.on("down", () => {
    breadOne.off();
    setTimeout(() => {breadOne.on();}, timer);
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "hue": 45968,
          "bri": i
        })
      });
    }
    
  });

  buttonP.on("down", () => {
    breadOne.off();
    setTimeout(() => {breadOne.on();}, timer);
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "hue": 49703,
          "bri": i
        })
      });
    }
  });

  buttonY.on("down", () => {
    breadOne.off();
    setTimeout(()=> {breadOne.on();}, timer);
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "hue": 9676,
          "bri": i
        })
      });
    }
  });

  buttonG.on("down", () => {
    breadOne.off();
    setTimeout(()=>{breadOne.on();}, timer)
    for(var i = 255; i >= lightBriMin; i-= 10){
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "hue": 23114,
          "bri": i
        })
      });
    }
  });

  
  potentio.on("change", () => {
    if(potVal - potBuffer > potentio.value || potVal + potBuffer < potentio.value){
      potVal = potentio.value;
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          "bri": potentio.scaleTo(0, 255)
        })
      });
    }
  });
});
