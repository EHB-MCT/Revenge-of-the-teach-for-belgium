"use strict";
exports.__esModule = true;
exports.Button = void 0;
var Intervals_js_1 = require("./music/Intervals.js");
var Note_js_1 = require("./music/Note.js");
var Mode_js_1 = require("./music/Mode.js");
var soundplayer = require('sound-play');
var Button = /** @class */ (function () {
    function Button() {
        this.playsNote = false;
        this.noteName = 'n/a';
        this.type = "";
    }
    Button.prototype.playNote = function () {
        this.generateNote();
    };
    Button.prototype._play = function (options) {
        var noteName = this.noteAdjustments(options);
        var sound;
        sound = soundplayer.play("C:/Users/Wafflemancer/Downloads/hf-january-master/january/assets/notes/" + noteName + ".wav");
        console.log(noteName);
    };
    Button.prototype.playChord = function () {
        //TODO
    };
    Button.prototype.generateNote = function () {
        var played = false;
        var optionSets;
        optionSets = Mode_js_1.Mode.current.logic;
        for (var j = 0; j < Intervals_js_1.Intervals.DATABASE.length - 1; j++) {
            if (Note_js_1.Note.lastRecorded == Intervals_js_1.Intervals.loadout.get(Intervals_js_1.Intervals.DATABASE[j])) {
                this._play(optionSets[j]);
                played = true;
            }
        }
        if (played = false)
            this._play(optionSets[22]); //edge case 
    };
    Button.prototype.noteAdjustments = function (options) {
        var note = "";
        var random = 0;
        // NOTE PREVENTIONS
        random = Math.random() * options.length - 1;
        note = Intervals_js_1.Intervals.loadout.get(options[random]);
        // Halve Probability of Trills and Repeats
        if (note == Note_js_1.Note.secondToLastRecorded || note == Note_js_1.Note.lastAbsolute) {
            random = Math.random() * options.length - 1;
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
        /* if (Key.justChanged && Mode.current != Mode.MIXOLYDIAN
            && (note == Intervals.loadout.get("two1") ||
                note == Intervals.loadout.get("for1") ||
                note == Intervals.loadout.get("six1") ||
                note == Intervals.loadout.get("for2") ||
                note == Intervals.loadout.get("six2") ||
                note == Intervals.loadout.get("for3") ||
                note == Intervals.loadout.get("six3")) ) {

            for (desc in Intervals.loadout.keys()) {

                if (note == Intervals.loadout.get(desc)) {

                    for (let j = 0; j < Intervals.DATABASE.length - 1; j++) {

                        if (Intervals.loadout.get(desc) == Intervals.DATABASE[j]) {

                            // change new note to be +/- 1 interval if the key just changed.
                            note = Intervals.loadout.get(Intervals.DATABASE[j + FlxG.random.sign()]);
                            break;
                        }
                    }
                }
            }
                
                Key.justChanged = false;
            }
        
            return note;
            
    
        } */
        return note;
    };
    Button.sounds = ["Small", "Octave", "Harmony", "Chord", "Transpose"];
    Button.weights = [88.5, 3.5, 3.5, 2, 2, 0.5];
    return Button;
}());
exports.Button = Button;
function test() {
    Note_js_1.Note.lastAbsolute = 'C4';
    soundplayer.play("C:/Users/pimto/Downloads/hf-january-master/january/assets/notes/D3.wav");
    Mode_js_1.Mode.index = Math.floor(Math.random() * 4);
    Mode_js_1.Mode.init();
}
test();
