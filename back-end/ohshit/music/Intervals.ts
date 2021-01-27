class Intervals {
    static populate() {
        throw new Error("Method not implemented.");
    }

    public DATABASE = ["one1", "two1", "thr1", "for1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "fiv3", "six3", "sev3", "one4"];

    public updated: Boolean = false;

    public loadout: Object = {};
    static updated: Boolean;
    populate() {
        if (this.updated = false) {
            let modeOffset;
            if (Key.current == "C Minor") {
                modeOffset = Mode.DATABASE[Mode.index].minorPos;
            } else {
                modeOffset = Mode.DATABASE[Mode.index].majorPos;
            }

            this.loadout = new Map();

            for (let i = 0; i <= this.DATABASE.length - 1; i++) {
                this.loadout[this.DATABASE[i]] = Key.DATABASE[Key.index[i + modeOffset]];
            }

            this.updated = true;
        }
    }
}
