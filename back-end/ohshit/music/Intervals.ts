import { Key } from "./Key";
import { Mode } from "./Mode";

export class Intervals {
    
    public static DATABASE: Array<String> = ["one1", "two1", "thr1", "for1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "fiv3", "six3", "sev3", "one4"];

    public static updated: Boolean = false;
    public static loadout: Map<String, String>;

    public static populate() {
        if (this.updated = false) {
            let modeOffset: number;
            if (Key.current == "C Minor") {
                modeOffset = Mode.DATABASE[Mode.index].minorPos;
            } else {
                modeOffset = Mode.DATABASE[Mode.index].majorPos;
            }

            Intervals.loadout = new Map();

            for (let i = 0; i <= this.DATABASE.length - 1; i++) {
                Intervals.loadout.set(Intervals.DATABASE[i], Key.DATABASE[Key.index][i + modeOffset]);
            }

            Intervals.updated = true;
        }
    }
}