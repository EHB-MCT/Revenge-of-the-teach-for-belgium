import { Button } from '../Button'

class Small extends Button {

    public new(){

       super.playsNote = true;
    }

    onPress(){
        //DRUK HIER MET ARDUINO EVENT OFZO

        this.playNote();
    }
}