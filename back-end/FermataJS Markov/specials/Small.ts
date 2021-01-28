import { Button } from "../Button";

export class Small extends Button {

    public new(){

       super.playsNote = true;
    }

    public onPress(){
        //DRUK HIER MET ARDUINO EVENT OFZO

        super.playNote();
    }
}