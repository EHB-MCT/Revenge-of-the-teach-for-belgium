import {Intervals} from './music/Intervals.js';
import {Key} from './music/Key.js';
import {Note} from './music/Note.js';
import {Mode} from './music/Mode.js';
import { Small } from './specials/Small.js';
import { Harmony } from './specials/Harmony.js';
import { Octave } from './specials/Octave';

export const soundplayer = require('sound-play');
export const JZZ = require('jzz');
require("jzz-midi-smf")(JZZ);


export async function playMIDI(note: any) {
    var midi = await JZZ();
    var port = await midi.openMidiOut();
    await port.noteOn(0, note, 127);
    await port.wait(5000);
    await port.noteOff(0, note);
    await port.close();
    console.log('done!');
}


//This might be bugged in the module itself, absolute path works so far.
//export const soundfilesPath = './notes/';
export const soundfilesPath = 'C:/Users/Wafflemancer/Downloads/hf-january-master/january/assets/notes/';


export class Button {
    
	
	public playsNote: Boolean = false;
	public noteName: String = 'n/a';

	public type: String = "";
    private static lastSoundtype: String;

    static sounds =     ["Small", "Octave", "Harmony", "Chord", "Transpose"];
    static weights =    [ 88.5  ,  3.5	 ,  3.5		,  2	 ,  0.5]; 
    static playsNote: boolean;

    public static playNote(){
		Button.generateNote();
    }

    public static play(options: Array<String>){
		let noteName = Button.noteAdjustments(options);
		playMIDI(noteName)
		//soundplayer.play(`${soundfilesPath}${noteName}.wav`);
		console.log(`${soundfilesPath} playing ${noteName}`)
	}
	
	public static playChord(){
		let chordTones: Array<String> = Mode.current.chords[Math.floor(Math.random() * Mode.current.chords.length)];
		console.log(`These are the chord tones: ${chordTones}`)
		playMIDI(Intervals.loadout.get(chordTones[0]));
		playMIDI(Intervals.loadout.get(chordTones[1]));
		playMIDI(Intervals.loadout.get(chordTones[2]));
		// If the chord is a seventh chord, push the 4th chord tone.
		if (chordTones.length > 3 && Intervals.loadout.get(chordTones[3]) != null) {
			playMIDI(Intervals.loadout.get(chordTones[3]));
		}
			


	//TODO

	}

    public static generateNote(){

        console.log('starting GenerateNote')
        let played: Boolean = false;
        let optionSets: Array<Array<String>>;

		optionSets = Mode.current.logic;
		console.log(Intervals.loadout)
        for (let j = 0; j < Intervals.DATABASE.length; j++) {
			console.log(`starting loop, current interation: ${j}`)
            if (Note.lastRecorded == Intervals.loadout.get(Intervals.DATABASE[j])){
				this.play(optionSets[j]);
				console.log('generated note, playing note');
                played = true;
            }
        }
		if (played = false){ 
			this.play(optionSets[22]);
			console.log('using generate note edge case')
		}; //edge case 
    }

	//Edge cases and preventing chromatism hell
    private static noteAdjustments(options: Array<String>):String {
			console.log('adjusting notes');
			let note: any = "";
			let random: number = 0;
			
			// NOTE PREVENTIONS
			random = Math.floor(Math.random()* options.length);
			note = Intervals.loadout.get(options[random]);
			
			// Halve Probability of Trills and Repeats
			if (note == Note.secondToLastRecorded || note == Note.lastAbsolute){
				console.log("halvin probability of Trills and Repeats")
				random = Math.random()* options.length;
				note = Intervals.loadout.get(options[random]);
			}
			
			let g = 0;		
			while (g < 100 && (note == null
				|| (note == Note.lastHarmony && Button.lastSoundtype == "Harmony")
				|| (note == Note.lastOctave && Button.lastSoundtype == "Octave")
				//|| (type == "Octave" && (note == Intervals.loadout.get("for1") || note == Intervals.loadout.get("for2") || note == Intervals.loadout.get("for3")))
				))
			{
				random = Math.random() * options.length - 1;
				note = Intervals.loadout.get(options[random]);
				g++;
			}				
			
			// Prevent certain tensions from triggering on record mode key changes
		 if (Key.justChanged && Mode.current != Mode.MIXOLYDIAN
			&& (note == Intervals.loadout.get("two1") ||
				note == Intervals.loadout.get("for1") ||
				note == Intervals.loadout.get("six1") ||
				note == Intervals.loadout.get("for2") ||
				note == Intervals.loadout.get("six2") ||
				note == Intervals.loadout.get("for3") ||
				note == Intervals.loadout.get("six3")) ) {

			for (let desc in Intervals.loadout.keys()) {
				if (note == Intervals.loadout.get(desc)) {
					for (let j = 0; j < Intervals.DATABASE.length - 1; j++) {
						if (Intervals.loadout.get(desc) == Intervals.DATABASE[j]) {
							// change new note to be +/- 1 interval if the key just changed.
							note = Intervals.loadout.get(Intervals.DATABASE[j + Math.random() < 0.5 ? -1 : 1]);
							break;
						}
					}
				}
			}
			Key.justChanged = false;
		}
		return note;
		}	
}

