"use strict";
exports.__esModule = true;
exports.Intervals = void 0;
var Key_1 = require("./Key");
var Mode_1 = require("./Mode");
var Intervals = /** @class */ (function () {
    function Intervals() {
    }
    Intervals.populate = function () {
        console.log("populating");
        if (Intervals.updated == false) {
            console.log("updated is false");
            var modeOffset = void 0;
            console.log("Current key: " + Key_1.Key.current);
            if (Key_1.Key.current == "C Minor") {
                modeOffset = Mode_1.Mode.DATABASE[Mode_1.Mode.index].minorPos;
                console.log("Minor position");
            }
            else {
                modeOffset = Mode_1.Mode.DATABASE[Mode_1.Mode.index].majorPos;
                console.log("Major position");
            }
            Intervals.loadout = new Map();
            for (var i = 0; i <= Intervals.DATABASE.length - 1; i++) {
                //console.log(Key.index[Number(i + modeOffset)])
                var sparta = Key_1.Key.DATABASE[Math.floor(Math.random() * 2)];
                var athena = sparta[i + modeOffset];
                Intervals.loadout.set(Intervals.DATABASE[i], athena);
                console.log("-----------");
                console.log(Intervals.DATABASE[i]);
                console.log("-----------");
                console.log(Key_1.Key.index + i + "   this is sparta");
                console.log("-----------");
                console.log(Key_1.Key.DATABASE);
                console.log("-----------");
                console.log("This is " + sparta);
                console.log(athena);
            }
            Intervals.updated = true;
            console.log('test');
            console.log(Intervals.loadout);
        }
        else
            return;
    };
    Intervals.DATABASE = ["one1", "two1", "thr1", "for1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "fiv3", "six3", "sev3", "one4"];
    Intervals.updated = false;
    return Intervals;
}());
exports.Intervals = Intervals;
