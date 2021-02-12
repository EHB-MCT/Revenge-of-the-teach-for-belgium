"use strict";
exports.__esModule = true;
exports.Button = exports.soundfilesPath = exports.load = exports.play = void 0;
var Intervals_js_1 = require("./music/Intervals.js");
var Key_js_1 = require("./music/Key.js");
var Note_js_1 = require("./music/Note.js");
var Mode_js_1 = require("./music/Mode.js");
//export const soundplayer = require('sound-play');
//export const player = require('play-sound');
exports.play = require('audio-play');
exports.load = require('audio-loader');
//This might be bugged in the module itself, absolute path works so far.
//export const soundfilesPath = './notes/';
exports.soundfilesPath = './notes/';
var Button = /** @class */ (function () {
    function Button() {
        this.playsNote = false;
        this.noteName = 'n/a';
        this.type = "";
    }
    Button.playNote = function () {
        Button.generateNote();
    };
    Button.play = function (options) {
        var noteName = Button.noteAdjustments(options);
        //soundplayer.play(`${soundfilesPath}${noteName}.wav`);
        //player(`${soundfilesPath}${noteName}.wav`).play();
        exports.load("" + exports.soundfilesPath + noteName + ".wav").then(exports.play);
        console.log(Key_js_1.Key.current + " " + Mode_js_1.Mode.current.name + ", " + noteName);
    };
    Button.playChord = function () {
        var chordTones = Mode_js_1.Mode.current.chords[Math.floor(Math.random() * Mode_js_1.Mode.current.chords.length)];
        console.log("These are the chord tones: " + chordTones);
        exports.load("" + exports.soundfilesPath + Intervals_js_1.Intervals.loadout.get(chordTones[0]) + ".wav").then(exports.play);
        exports.load("" + exports.soundfilesPath + Intervals_js_1.Intervals.loadout.get(chordTones[1]) + ".wav").then(exports.play);
        exports.load("" + exports.soundfilesPath + Intervals_js_1.Intervals.loadout.get(chordTones[2]) + ".wav").then(exports.play);
        // If the chord is a seventh chord, push the 4th chord tone.
        if (chordTones.length > 3 && Intervals_js_1.Intervals.loadout.get(chordTones[3]) != null) {
            exports.load("" + exports.soundfilesPath + Intervals_js_1.Intervals.loadout.get(chordTones[3]) + ".wav").then(exports.play);
        }
    };
    Button.generateNote = function () {
        console.log('starting GenerateNote');
        var played = false;
        var optionSets;
        optionSets = Mode_js_1.Mode.current.logic;
        console.log(Intervals_js_1.Intervals.loadout);
        for (var j = 0; j < Intervals_js_1.Intervals.DATABASE.length; j++) {
            if (Note_js_1.Note.lastRecorded == Intervals_js_1.Intervals.loadout.get(Intervals_js_1.Intervals.DATABASE[j])) {
                console.log("current interation: " + j);
                this.play(optionSets[j]);
                console.log('generated note, playing note');
                played = true;
            }
        }
        if (played = false) {
            this.play(optionSets[22]);
            console.log('using generate note edge case');
        }
        ; //edge case 
    };
    //Edge cases and preventing chromatism hell
    Button.noteAdjustments = function (options) {
        console.log('adjusting notes');
        var note = "";
        var random = 0;
        // NOTE PREVENTIONS
        random = Math.floor(Math.random() * options.length);
        note = Intervals_js_1.Intervals.loadout.get(options[random]);
        // Halve Probability of Trills and Repeats
        if (note == Note_js_1.Note.secondToLastRecorded || note == Note_js_1.Note.lastAbsolute) {
            console.log("halvin probability of Trills and Repeats");
            random = Math.random() * options.length;
            note = Intervals_js_1.Intervals.loadout.get(options[random]);
        }
        var g = 0;
        while (g < 100 && (note == null
            || (note == Note_js_1.Note.lastHarmony && Button.lastSoundtype == "Harmony")
            || (note == Note_js_1.Note.lastOctave && Button.lastSoundtype == "Octave")
        //|| (type == "Octave" && (note == Intervals.loadout.get("for1") || note == Intervals.loadout.get("for2") || note == Intervals.loadout.get("for3")))
        )) {
            random = Math.random() * options.length - 1;
            note = Intervals_js_1.Intervals.loadout.get(options[random]);
            g++;
        }
        // Prevent certain tensions from triggering on record mode key changes
        if (Key_js_1.Key.justChanged && Mode_js_1.Mode.current != Mode_js_1.Mode.MIXOLYDIAN
            && (note == Intervals_js_1.Intervals.loadout.get("two1") ||
                note == Intervals_js_1.Intervals.loadout.get("for1") ||
                note == Intervals_js_1.Intervals.loadout.get("six1") ||
                note == Intervals_js_1.Intervals.loadout.get("for2") ||
                note == Intervals_js_1.Intervals.loadout.get("six2") ||
                note == Intervals_js_1.Intervals.loadout.get("for3") ||
                note == Intervals_js_1.Intervals.loadout.get("six3"))) {
            for (var desc in Intervals_js_1.Intervals.loadout.keys()) {
                if (note == Intervals_js_1.Intervals.loadout.get(desc)) {
                    for (var j = 0; j < Intervals_js_1.Intervals.DATABASE.length - 1; j++) {
                        if (Intervals_js_1.Intervals.loadout.get(desc) == Intervals_js_1.Intervals.DATABASE[j]) {
                            // change new note to be +/- 1 interval if the key just changed.
                            note = Intervals_js_1.Intervals.loadout.get(Intervals_js_1.Intervals.DATABASE[j + Math.random() < 0.5 ? -1 : 1]);
                            break;
                        }
                    }
                }
            }
            Key_js_1.Key.justChanged = false;
        }
        return note;
    };
    Button.sounds = ["Small", "Octave", "Harmony", "Chord", "Transpose"];
    Button.weights = [88.5, 3.5, 3.5, 2, 0.5];
    return Button;
}());
exports.Button = Button;
