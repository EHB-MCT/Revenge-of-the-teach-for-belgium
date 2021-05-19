"use strict";
exports.__esModule = true;
var Note_js_1 = require("./music/Note.js");
var Mode_js_1 = require("./music/Mode.js");
var Small_js_1 = require("./specials/Small.js");
var Octave_1 = require("./specials/Octave");
var Button_1 = require("../FermataJS Markov/Button");
var Transpose_js_1 = require("./specials/Transpose.js");
var Chord_js_1 = require("./specials/Chord.js");
var WebMidi = require("webmidi").WebMidi;
WebMidi.enable().then(onEnabled)["catch"](function (err) { return console.log(err); });
var output = WebMidi.getOutputByName("toKeyscape").channels[1];
function onEnabled() {
    //console.log(WebMidi.inputs);
    //console.log(WebMidi.inputs[3]);
    //console.log("Channel", WebMidi.inputs[3].channels[1]);
    console.log(output);
    //output.playNote(["G4", "G5"], {duration: 10000});
    //Chord.Chord.onPress();
}
;
Note_js_1.Note.lastRecorded = 'C3';
Mode_js_1.Mode.index = Math.floor(Math.random() * 4);
Mode_js_1.Mode.current = Mode_js_1.Mode.IONIAN;
Note_js_1.Note.lastOctave = 'C3';
Mode_js_1.Mode.init();
Button_1.Button.playChord();
setTimeout(function () {
    console.log('Small playNote');
    Small_js_1.Small.playNote();
}, 3000);
setTimeout(function () {
    console.log('Chord playChord');
    Chord_js_1.Chord.onPress();
}, 6000);
setTimeout(function () {
    console.log('playing Transpose');
    Transpose_js_1.Transpose.onPress();
}, 9000);
setTimeout(function () {
    console.log('playing Octave');
    Octave_1.Octave.onPress();
}, 12000);
