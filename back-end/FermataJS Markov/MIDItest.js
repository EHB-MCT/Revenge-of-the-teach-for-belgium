const {WebMidi} = require("webmidi");


//const Chord = require("./specials/Chord.js");

WebMidi
  .enable()
  .then(onEnabled)
  .catch(err => console.log(err));


function onEnabled() {
  //console.log(WebMidi.inputs);
  //console.log(WebMidi.inputs[3]);
  //console.log("Channel", WebMidi.inputs[3].channels[1]);

  let input = WebMidi.getInputByName("loopMIDI Port");
  let channel = input.channels[1];
  console.log(channel);

  channel.addListener("noteon", e => {
    console.log(`Received 'noteon' message (${e.note.name}${e.note.octave}).`);
    WebMidi.getOutputByName("toKeyscape").channels[1].playNote(["G4", "G5"], {duration: 10000});
    //Chord.Chord.onPress();
  });
}
