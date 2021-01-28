
class Chord extends Button {

    Chord(){
        super();

        //volume???
    }

    onPress(){

        super.onPress()

        Mode.change();
        playNote();
        playChord();
    }

    update(){
        super.update();
        play("default");
    }
}