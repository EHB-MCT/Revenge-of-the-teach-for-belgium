import { Button } from "../Button";
import { Key } from "../music/Key";
import { Mode } from "../music/Mode";

export class Transpose extends Button{

    public static onPress(){

        Mode.change();
        Key.change();
        Button.playChord();
    }
}