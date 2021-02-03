import { Button, soundplayer, soundfilesPath } from "../Button";
import { Note } from "../music/Note";

export class Octave extends Button{

    static WEIGHT = 3.5;

    new(){
        //super();
        Button.playsNote = true;
    }

    public static onPress(){

        Button.playNote();
        Octave.playOctave();
        
    }

     public static playOctave(){
        let octaveTone:String = "";
        let octaveDownorUp: Array<number> = [-12, 12]

        for (let i = 0; i < Note.DATABASE.length; i++) {
            
            if (Note.lastAbsolute == Note.DATABASE[i]) {

				while (octaveTone == "" || octaveTone == null) octaveTone = Note.DATABASE[i + octaveDownorUp[Math.floor(Math.random() * octaveDownorUp.length)]];

				
			}
            
        }

        soundplayer.play(`${soundfilesPath}${octaveTone}.wav`)

        Note.lastOctave = octaveTone;
    }
    
}