"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Button = exports.playMIDI = exports.JZZ = exports.soundplayer = void 0;
var Intervals_js_1 = require("./music/Intervals.js");
var Key_js_1 = require("./music/Key.js");
var Note_js_1 = require("./music/Note.js");
var Mode_js_1 = require("./music/Mode.js");
exports.soundplayer = require('sound-play');
exports.JZZ = require('jzz');
require("jzz-midi-smf")(exports.JZZ);
var WebMidi = require("webmidi").WebMidi;
function playMIDI(note) {
    return __awaiter(this, void 0, void 0, function () {
        var midi, port;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.JZZ()];
                case 1:
                    midi = _a.sent();
                    return [4 /*yield*/, midi.openMidiOut()];
                case 2:
                    port = _a.sent();
                    return [4 /*yield*/, port.noteOn(0, note, 127)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, port.wait(2000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, port.noteOff(0, note)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, port.close()];
                case 6:
                    _a.sent();
                    console.log('played:', note);
                    return [2 /*return*/];
            }
        });
    });
}
exports.playMIDI = playMIDI;
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
        playMIDI(noteName);
    };
    Button.playChord = function () {
        var chordTones = Mode_js_1.Mode.current.chords[Math.floor(Math.random() * Mode_js_1.Mode.current.chords.length)];
        console.log("These are the chord tones: " + chordTones);
        playMIDI(Intervals_js_1.Intervals.loadout.get(chordTones[0]));
        playMIDI(Intervals_js_1.Intervals.loadout.get(chordTones[1]));
        playMIDI(Intervals_js_1.Intervals.loadout.get(chordTones[2]));
        // If the chord is a seventh chord, push the 4th chord tone.
        if (chordTones.length > 3 && Intervals_js_1.Intervals.loadout.get(chordTones[3]) != null) {
            playMIDI(Intervals_js_1.Intervals.loadout.get(chordTones[3]));
        }
        //TODO
    };
    Button.generateNote = function () {
        console.log('starting GenerateNote');
        var played = false;
        var optionSets;
        optionSets = Mode_js_1.Mode.current.logic;
        console.log(Intervals_js_1.Intervals.loadout);
        for (var j = 0; j < Intervals_js_1.Intervals.DATABASE.length; j++) {
            if (Note_js_1.Note.lastRecorded == Intervals_js_1.Intervals.loadout.get(Intervals_js_1.Intervals.DATABASE[j])) {
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
