"use strict";
exports.__esModule = true;
exports.Key = void 0;
var Intervals_1 = require("./Intervals");
var Key = /** @class */ (function () {
    function Key() {
    }
    Key.change = function () {
        var newIndex = Math.random() * Key.DATABASE.length - 1;
        while (newIndex == Key.index)
            newIndex = Math.random() * Key.DATABASE.length - 1;
        Key.index = newIndex;
        Key.current = Key.DATABASE[Key.index]; //Key.index
        Intervals_1.Intervals.updated = false;
        Intervals_1.Intervals.populate();
        Key.justChanged = true;
    };
    Key.cycle = function () {
        Key.change();
    };
    Key.C_MAJOR = ["C Major", "C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];
    Key.C_MINOR = ["C Minor", "C2", "D2", "D#2", "F2", "G2", "G#2", "A#2", "C3", "D3", "D#3", "F3", "G3", "G#3", "A#3", "C4", "D4", "D#4", "F4", "G4", "G#4", "A#4", "C5", "D5", "D#5", "F5", "G5", "G#5", "A#5"];
    Key.DATABASE = [Key.C_MAJOR, Key.C_MINOR];
    Key.index = Math.floor(Math.random() * Key.DATABASE.length);
    Key.current = Key.DATABASE[Key.index];
    return Key;
}());
exports.Key = Key;
