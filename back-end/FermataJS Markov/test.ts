import {Intervals} from './music/Intervals.js';
import {Key} from './music/Key.js';
import {Note} from './music/Note.js';
import {Mode} from './music/Mode.js';
import { Small } from './specials/Small.js';
import { Harmony } from './specials/Harmony.js';
import { Octave } from './specials/Octave';
import { Button } from '../FermataJS Markov/Button'
import { Transpose } from './specials/Transpose.js';
import { Chord } from './specials/Chord.js';

function test(){
	Note.lastRecorded = 'C4';
	Mode.index = Math.floor(Math.random() * 4);
    Mode.init();
    
    setTimeout(() => {
        console.log('Button playNote');
        Button.playNote();
    }, 5000);

	setTimeout(() =>{
        console.log('Button play chord');
        Button.playChord();
    }, 10000);

    setTimeout(() =>{
        console.log('playing Transpose');
        Transpose.onPress();
    }, 15000); 
	setTimeout(() =>{
        console.log('playing Octave');
        Octave.onPress();
    }, 20000);
	setTimeout(Chord.onPress, 25000);
}

test()