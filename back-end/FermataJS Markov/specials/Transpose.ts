import { Button } from "../Button";
import { Key } from "../music/Key";
import { Mode } from "../music/Mode";

export class Transpose extends Button{

    public static onPress(){
        console.log('changing mode')
        Mode.change();
        console.log('changing key')
        Key.change();
        console.log('playing transposition chord')
        Button.playChord();
    }
}

