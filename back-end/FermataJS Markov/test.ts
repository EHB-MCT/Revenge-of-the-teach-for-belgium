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

Note.lastRecorded = 'C3';
Note.lastAbsolute = 'C3';
Mode.index = Math.floor(Math.random() * 4);
Mode.current = Mode.IONIAN;
Note.lastOctave = 'C3';
Mode.init();
 
    setTimeout(() => {
        console.log('Small playNote');
        Small.onPress();
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


