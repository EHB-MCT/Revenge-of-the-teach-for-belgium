import { Key } from "./Key";
import { Mode } from "./Mode";

export class Intervals {
    
    public static DATABASE: Array<String> = ["one1", "two1", "thr1", "for1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "fiv3", "six3", "sev3", "one4"];

    public static updated: Boolean = false;
    public static loadout: Map<String, String>;

    public static populate() {
        console.log("populating");
        if (Intervals.updated == false) {
            console.log("updated is false");
            let modeOffset: number;
            console.log(`Current key: ${Key.current}`)
            console.log(`Current mode: ${Mode.DATABASE[Mode.index].name}`)
            if (Key.current == "C Minor") {
                modeOffset = Mode.DATABASE[Mode.index].minorPos;
                console.log("Minor position")
            } else {
                modeOffset = Mode.DATABASE[Mode.index].majorPos;
                console.log("Major position")
            }

            Intervals.loadout = new Map();
            for (let i = 0; i <= Intervals.DATABASE.length - 1; i++) {
                let sparta = Key.DATABASE[Math.floor(Math.random() * 2)];
                let athena = sparta[i + modeOffset];
                Intervals.loadout.set(Intervals.DATABASE[i], athena);
                
                console.log(athena);
            }

            Intervals.updated = true;
            console.log(Intervals.loadout);
        }
        else return;
    }
}