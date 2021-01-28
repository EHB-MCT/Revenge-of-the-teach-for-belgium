import {Intervals} from './music/Intervals.js';
import {Key} from './music/Key.js';
import {Note} from './music/Note.js';
import {Mode} from './music/Mode.js';

const player = require('play-sound');



class Button {
    
    //Storing intervals
	static i: Object = {};
	
	public playsNote: Boolean = false;
	public noteName: String = 'n/a';

    static lastSoundtype: String;

    static sounds =     ["Small", "Octave", "Harmony", "Chord", "Transpose"];
    static weights =    [ 88.5  ,  3.5	 ,  3.5		,  2	 ,	2	 ,  0.5		  ]; 


    Button(){
        
    }

    playNote(){
        Button.i = Intervals.loadout;
        this.generateNote();
    }

    _play(options: any){
        let randomNote = this.noteAdjustments(options);

        let sound;

        sound = player.play(randomNote);
        console.log(randomNote);

    }






    private generateNote(){
        
        let played: Boolean;
        let optionSets: Array<Array<String>>;

        optionSets = Mode.current.logic;

        for (let j = 0; j < Intervals.DATABASE.length - 1; j++) {
            if (Note.lastRecorded == Button.i[Intervals.DATABASE[j]]){
                this._play(optionSets[j]);
                played = true;
            }
        }

        if (played = false) this._play(optionSets[22]); //edge case 
    }


    private noteAdjustments(options: Array<String>)
		{
			let note;
			let random;
			
			// NOTE PREVENTIONS
			random = Math.random()* options.length - 1;
			note = Button.i[options[random]];
			
			// Halve Probability of Trills and Repeats
			if (note == Note.secondToLastRecorded || note == Note.lastAbsolute)
			{
				random = Math.random()* options.length - 1;
				note = Button.i[options[random]];
			}
			
			let g = 0;		
			while (g < 100 && (note == null
				|| (note == Note.lastHarmony && Button.lastSoundtype == "Harmony")
				|| (note == Note.lastOctave && Button.lastSoundtype == "Octave")
				//|| (type == "Octave" && (note == Button.i.for1 || note == Button.i.for2 || note == Button.i.for3)) 
				))
			{
				random = Math.random()* options.length - 1;
				note = Button.i[options[random]];
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
		}	
}