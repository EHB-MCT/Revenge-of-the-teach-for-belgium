"use strict";
exports.__esModule = true;
exports.Intervals = void 0;
var Key_1 = require("./Key");
var Mode_1 = require("./Mode");
var Intervals = /** @class */ (function () {
    function Intervals() {
    }
    Intervals.populate = function () {
        if (this.updated = false) {
            var modeOffset = void 0;
            if (Key_1.Key.current == "C Minor") {
                modeOffset = Mode_1.Mode.DATABASE[Mode_1.Mode.index].minorPos;
            }
            else {
                modeOffset = Mode_1.Mode.DATABASE[Mode_1.Mode.index].majorPos;
            }
            Intervals.loadout = new Map();
            for (var i = 0; i <= this.DATABASE.length - 1; i++) {
                Intervals.loadout.set(Intervals.DATABASE[i], Key_1.Key.DATABASE[Key_1.Key.index][i + modeOffset]);
            }
            Intervals.updated = true;
        }
    };
    Intervals.DATABASE = ["one1", "two1", "thr1", "for1", "fiv1", "six1", "sev1", "one2", "two2", "thr2", "for2", "fiv2", "six2", "sev2", "one3", "two3", "thr3", "for3", "fiv3", "six3", "sev3", "one4"];
    Intervals.updated = false;
    return Intervals;
}());
exports.Intervals = Intervals;
