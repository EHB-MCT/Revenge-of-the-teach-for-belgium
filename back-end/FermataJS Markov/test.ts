import {
    Intervals
} from './music/Intervals.js';
import {
    Key
} from './music/Key.js';
import {
    Note
} from './music/Note.js';
import {
    Mode
} from './music/Mode.js';
import {
    Small
} from './specials/Small.js';
import {
    Harmony
} from './specials/Harmony.js';
import {
    Octave
} from './specials/Octave';
import {
    Button
} from '../FermataJS Markov/Button'
import {
    Transpose
} from './specials/Transpose.js';
import {
    Chord
} from './specials/Chord.js';

const {WebMidi}: any = require("webmidi");


WebMidi.enable().then(onEnabled).catch((err: any) => console.log(err));

let output = WebMidi.getOutputByName("toKeyscape").channels[1]; 


function onEnabled() {
  //console.log(WebMidi.inputs);
  //console.log(WebMidi.inputs[3]);
  //console.log("Channel", WebMidi.inputs[3].channels[1]);

  
  console.log(output)
    //output.playNote(["G4", "G5"], {duration: 10000});
    //Chord.Chord.onPress();
};

Note.lastRecorded = 'C3';
Mode.index = Math.floor(Math.random() * 4);
Mode.current = Mode.IONIAN;
Note.lastOctave = 'C3';
Mode.init();
 
    Button.playChord();
    setTimeout(() => {
        console.log('Small playNote');
        Small.playNote();
    }, 3000);
    
    setTimeout(() => {
        console.log('Chord playChord');
        Chord.onPress();
    }, 6000);
    
    setTimeout(() => {
        console.log('playing Transpose');
        Transpose.onPress();
    }, 9000);
    setTimeout(() => {
        console.log('playing Octave');
        Octave.onPress();
    }, 12000);


