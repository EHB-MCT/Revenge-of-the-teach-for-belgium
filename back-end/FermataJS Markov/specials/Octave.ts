import { Button, load, play, soundfilesPath } from "../Button";
import { Note } from "../music/Note";

export class Octave extends Button{

    public static onPress(){
        Button.playNote();
        Octave.playOctave();
    }

     public static playOctave(){
        let octaveTone:String = "";
        let octaveDownorUp: Array<number> = [-12, 12]
        console.log('starting octave loop')

        for (let i = 0; i < Note.DATABASE.length; i++) {
            if (Note.lastAbsolute == Note.DATABASE[i]) {
                console.log('playing octave tone')
				while (octaveTone == "" || octaveTone == null) {
                    octaveTone = Note.DATABASE[i + octaveDownorUp[Math.floor(Math.random() * octaveDownorUp.length - 1)]];
                    console.log(octaveTone)
                }
			}
        }
        load(`${soundfilesPath}${octaveTone}.wav`).then(play);
        Note.lastOctave = octaveTone;
    }   
}
