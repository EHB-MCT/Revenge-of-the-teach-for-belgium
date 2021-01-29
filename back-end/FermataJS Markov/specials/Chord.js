import { Button } from "../Button";
import { Mode } from "../music/Mode";

export class Chord extends Button {

    Chord(){
        

        //volume???
    }

    onPress(){

        super.onPress()

        Mode.change();
        playNote();
        super.playChord();
    }

    update(){
        super.update();
        play("default");
    }
}