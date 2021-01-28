import { Button } from "../Button";
import { Note } from "../music/Note";

export class Octave extends Button{

    static WEIGHT = 3.5;

    new(){
        //super();
        Button.playsNote = true;
    }

     onPress(){

        this.playNote();
        playOctave();
        
    }

     playOctave(){
        let octaveString = "";

        for (let i = 0; i < Note.DATABASE.length; i++) {
            
            if (Note.lastAbsolute == Note.DATABASE[i]) {

				while (octaveTone == "" || octaveTone == null)
					octaveTone = Note.DATABASE[i + FlxG.random.getObject([12, -12])];

				break;
			}
            
        }
    }
    
}