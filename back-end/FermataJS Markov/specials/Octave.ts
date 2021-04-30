import { Button, playMIDI } from "../Button";
import { Note } from "../music/Note";

export class Octave extends Button{

    public static onPress(){
        Button.playNote();
        Octave.playOctave();
    }

     public static playOctave(){
        let octaveTone:String = "";
        let octaveDownorUp: Array<number> = [-12, 12]

        for (let i = 0; i < Note.DATABASE.length; i++) {
            if (Note.lastAbsolute == Note.DATABASE[i]) {
                console.log('playing octave tone')
				while (octaveTone == "" || octaveTone == null) octaveTone = Note.DATABASE[i + octaveDownorUp[Math.floor(Math.random() * octaveDownorUp.length)]];
			}
        }
        playMIDI(octaveTone);
        Note.lastOctave = octaveTone;
    }   
}
