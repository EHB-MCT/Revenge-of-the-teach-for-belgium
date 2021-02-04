"use strict";
exports.__esModule = true;
var Note_js_1 = require("./music/Note.js");
var Mode_js_1 = require("./music/Mode.js");
var Small_js_1 = require("./specials/Small.js");
var Octave_1 = require("./specials/Octave");
var Button_1 = require("../FermataJS Markov/Button");
var Transpose_js_1 = require("./specials/Transpose.js");
var Chord_js_1 = require("./specials/Chord.js");
Note_js_1.Note.lastRecorded = 'C4';
Mode_js_1.Mode.index = Math.floor(Math.random() * 4);
Mode_js_1.Mode.init();
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('Button playNote');
        Small_js_1.Small.playNote();
    }, 3000);
    setTimeout(function () {
        console.log('Button play chord');
        Button_1.Button.playChord();
    }, 6000);
    setTimeout(function () {
        console.log('playing Transpose');
        Transpose_js_1.Transpose.onPress();
    }, 9000);
    setTimeout(function () {
        console.log('playing Octave');
        Octave_1.Octave.onPress();
    }, 12000);
    setTimeout(Chord_js_1.Chord.onPress, 25000);
}
