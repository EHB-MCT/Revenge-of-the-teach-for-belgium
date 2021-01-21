var five = require("johnny-five"),
  board, buttonOne, buttonTwo;
  const fetch = require("node-fetch");

  const host = "http://192.168.1.108"; // verander dees
  const username = "HuTtUaX2kulVKfQns026uFDZA3JlstsGjTsD2N1p"; // dees mss ook
  const hueUrl = `${host}/api/${username}`;
  const lampID = 1; // dees mss ook

board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  buttonOne = new five.Button(8);
  buttonTwo = new five.Button(9);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: buttonOne,
    button: buttonTwo
  });

  // Button Event API

  // "down" the button is pressed
  buttonOne.on("down", function() {
    fetch(`${hueUrl}/lights/${lampID}/state`, {
      method: 'PUT',
      body: JSON.stringify(
        {
            "on": true,
            "bri": 254,
            "hue": 23859,
            "sat": 254
        }
        
      )
    });
  });

  buttonTwo.on("down", function() {
    fetch(`${hueUrl}/lights/1/state`, {
      method: 'PUT',
      body: JSON.stringify( {
        "on": true,
        "bri": 254,
        "hue": 45824,
        "sat": 254
      })
    });
  });
});