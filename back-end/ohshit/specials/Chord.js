import { Mode } from "../music/Mode";

class Chord extends Button {

    Chord(){
        

        //volume???
    }

    onPress(){

        super.onPress()

        super.Mode.change();
        playNote();
        playChord();
    }

    update(){
        super.update();
        play("default");
    }
}