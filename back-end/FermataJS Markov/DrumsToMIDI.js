const { Note } = require( './music/Note.js');
const { Mode } = require( './music/Mode.js');
const { Small } = require( './specials/Small.js');
const { Harmony } = require( './specials/Harmony.js');
const { Octave } = require( './specials/Octave');
const { Transpose } = require( './specials/Transpose.js');
const { Chord } = require( './specials/Chord.js');

function init(){
    Note.lastRecorded = 'C3';
    Mode.index = Math.floor(Math.random() * 4);
    Mode.current = Mode.IONIAN;
    Note.lastOctave = 'C3';
    Mode.init();
}


const {WebMidi} = require("webmidi");

WebMidi.enable().then(onEnabled).catch((err) => console.log(err));


function onEnabled() {
    let input = WebMidi.getInputByName('loopMIDI Port').channels[1];
    console.log(input);
    input.addListener("noteon", (MIDInote) => {
        console.log(`Received 'noteon' message (${MIDInote.note.name}).`);
        switch (MIDInote) {
            case "C1":
                Small.onPress();
                console.log('Generating small note')
                break;

            case "C2":
                Octave.onPress();
                console.log('Generating octave')
                break;

            case "C3":
                Harmony.onPress();
                console.log('Generating harmony')
                break;

            case "C4":
                Chord.onPress();
                console.log('Generating chord')
                break;

            case "C5":
                Transpose.onPress();
                console.log('Generating transposition')
                break;
        }
    });
}