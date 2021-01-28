import {Intervals} from './music/Intervals.js';
import {Key} from './music/Key.js';
import {Note} from './music/Note.js';
import {Mode} from './music/Mode.js';

const player = require('play-sound');



export class Button {
	
	public playsNote: Boolean = false;
	public noteName: String = 'n/a';

	public type: String = "";
    private static lastSoundtype: String;

    static sounds =     ["Small", "Octave", "Harmony", "Chord", "Transpose"];
    static weights =    [ 88.5  ,  3.5	 ,  3.5		,  2	 ,	2	 ,  0.5		  ]; 

    public playNote(){
        this.generateNote();
    }

    _play(options: Array<String>){
		
		let noteName = this.noteAdjustments(options);

        let sound;

        sound = player.play(`C:/Users/Wafflemancer/Downloads/hf-january-master/january/assets/notes/${noteName}.mp3`);
        console.log(noteName);

	}
	
	private playChord(){

	//TODO

	}







    private generateNote(){
        
        let played: Boolean = false;
        let optionSets: Array<Array<String>>;

        optionSets = Mode.current.logic;

        for (let j = 0; j < Intervals.DATABASE.length - 1; j++) {
            if (Note.lastRecorded == Intervals.loadout.get(Intervals.DATABASE[j])){
                this._play(optionSets[j]);
                played = true;
            }
        }

        if (played = false) this._play(optionSets[22]); //edge case 
    }


    private noteAdjustments(options: Array<String>):String {
			let note: any = "";
			let random: number = 0;
			
			// NOTE PREVENTIONS
			random = Math.random()* options.length - 1;
			note = Intervals.loadout.get(options[random]);
			
			// Halve Probability of Trills and Repeats
			if (note == Note.secondToLastRecorded || note == Note.lastAbsolute)
			{
				random = Math.random()* options.length - 1;
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
		}	
}

let test = player.play(`C:/Users/Wafflemancer/Downloads/hf-january-master/january/assets/notes/C4.mp3`);
