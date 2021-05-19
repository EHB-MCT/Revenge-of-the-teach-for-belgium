"use strict";
exports.__esModule = true;
exports.Button = void 0;
var Intervals_js_1 = require("./music/Intervals.js");
var Key_js_1 = require("./music/Key.js");
var Note_js_1 = require("./music/Note.js");
var Mode_js_1 = require("./music/Mode.js");
/* export const soundplayer = require('sound-play');
export const JZZ = require('jzz');
require("jzz-midi-smf")(JZZ);
export async function playJZZMIDI(note: any) {
    var midi = await JZZ();
    var port = await midi.openMidiOut();
    await port.noteOn(0, note, 127);
    await port.wait(2000);
    await port.noteOff(0, note);
    await port.close();
    console.log('played:', note);
} */
var WebMidi = require("webmidi").WebMidi;
//export let MIDIplay = (note: any) => WebMidi.getOutputByName("toKeyscape").channels[1].playNote(note, {duration: 10000});
var Button = /** @class */ (function () {
    function Button() {
        this.WebMidi = WebMidi.enable()["catch"](function (err) { return console.log(err); });
        this.playsNote = false;
        this.noteName = 'n/a';
        this.type = "";
    }
    Button.playNote = function () {
        Button.generateNote();
    };
    Button.play = function (options) {
        var noteName = Button.noteAdjustments(options);
        Button.MIDIplay(noteName);
        //playJZZMIDI(noteName)
    };
    Button.playChord = function () {
        var chordTones = Mode_js_1.Mode.current.chords[Math.floor(Math.random() * Mode_js_1.Mode.current.chords.length)];
        console.log("These are the chord tones: " + chordTones);
        Button.MIDIplay(Intervals_js_1.Intervals.loadout.get(chordTones));
        //playJZZMIDI(Intervals.loadout.get(chordTones[0]));
        //playJZZMIDI(Intervals.loadout.get(chordTones[1]));
        //playJZZMIDI(Intervals.loadout.get(chordTones[2]));
        // If the chord is a seventh chord, push the 4th chord tone.
        //if (chordTones.length > 3 && Intervals.loadout.get(chordTones[3]) != null) {
        //playJZZMIDI(Intervals.loadout.get(chordTones[3]));
        //}
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
    Button.MIDIplay = function (note) { return WebMidi.getOutputByName("toKeyscape").channels[1].playNote(note, { duration: 10000 }); };
    Button.sounds = ["Small", "Octave", "Harmony", "Chord", "Transpose"];
    Button.weights = [88.5, 3.5, 3.5, 2, 0.5];
    return Button;
}());
exports.Button = Button;
