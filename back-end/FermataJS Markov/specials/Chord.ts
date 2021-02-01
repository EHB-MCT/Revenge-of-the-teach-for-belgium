import { Button } from "../Button";
import { Mode } from "../music/Mode";

export class Chord extends Button {


    Chord(){
        

        //volume???
    }

    public static onPress(){


        Mode.change();
        //Button.playNote();
        //Button.playChord();
    }

    update(){
        //super.update();
    }
}