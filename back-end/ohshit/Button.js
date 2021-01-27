const Intervals = require('./music/Intervals.js')
const Key = require('./music/Key.js')
const Note = require('./music/Note.js')
const Mode = require('./music/Mode.js')

const player = require('play-sound');

class Button {
    
    //Storing intervals
    static i = {};

    static lastSoundtype;

    static sounds =     ["Small", "Octave", "Harmony", "Chord", "Transpose"];
    static weights =    [ 88.5  ,  3.5	 ,  3.5		,  2	 ,	2	 ,  0.5		  ]; 


    Button(){
        exists = false;
    }

    playNote(){
        i = Intervals.loadout;
        generateNote();
    }

    _play(options){
        let randomNote = noteAdjustments(options);

        let sound;

        sound = player.play(randomNote);
        console.log(randomNote);

    }






    generateNote(){
        
        let played;
        let optionSets = [];

        optionSets = Mode.current.logic;

        for (let j = 0; j < Intervals.DATABASE.length - 1; j++) {
            if (Note.lastRecorded == i[Intervals.DATABASE[j]]){
                this._play(optionSets[j]);
                played = true;
            }
        }

        if (played = false) _play(optionSets[22]); //edge case 
    }


    noteAdjustments(options)
		{
			let note;
			let random;
			
			// NOTE PREVENTIONS
			random = Math.random(0, options.length - 1);
			note = i[options[random]];
			
			// Halve Probability of Trills and Repeats
			if (note == Note.secondToLastRecorded || note == Note.lastAbsolute)
			{
				random = Math.random(0, options.length - 1);
				note = i[options[random]];
			}
			
			let g = 0;		
			while (g < 100 && (note == null
				|| (note == Note.lastHarmony && lastLickedType == "Harmony")
				|| (note == Note.lastOctave && lastLickedType == "Octave")
				|| (type == "Octave" && (note == i.for1 || note == i.for2 || note == i.for3)) ))
			{
				random = Math.random(0, options.length - 1);
				note = i[options[random]];
				g++;
			}				
			
			// Prevent certain tensions from triggering on record mode key changes
			if (Key.justChanged
				&& Mode.current != Mode.MIXOLYDIAN
				&& (note == i.two1 ||
					note == i.for1 ||
					note == i.six1 ||
					note == i.for2 ||
					note == i.six2 ||
					note == i.for3 ||
					note == i.six3) )
			{	
				for(let desc in i)
				{				
					if (note == i[desc])
					{
						for (var j = 0; j < Intervals.DATABASE.length - 1; j++)
						{
							if (i[desc] == Intervals.DATABASE[j])
							{
								// change new note to be +/- 1 interval if the key just changed.
								note = i[Intervals.DATABASE[j + Math.random() < 0.5 ? -1 : 1]];	
							}
						}
					}
				}
				
				Key.justChanged = false;
			}
		
			return note;
			
		}
}