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
        Key.current = Key.DATABASE[Key.index]; //[0]
        Intervals_1.Intervals.updated = false;
        Intervals_1.Intervals.populate();
        Key.justChanged = true;
    };
    Key.cycle = function () {
        Key.change();
    };
    Key.C_MAJOR = ["C Major", "C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4"];
    Key.C_MINOR = ["C Minor", "C1", "D1", "Ds1", "F1", "G1", "Gs1", "As1", "C2", "D2", "Ds2", "F2", "G2", "Gs2", "As2", "C3", "D3", "Ds3", "F3", "G3", "Gs3", "As3", "C4", "D4", "Ds4", "F4", "G4", "Gs4", "As4"];
    Key.DATABASE = [Key.C_MAJOR, Key.C_MINOR];
    Key.index = Math.floor(Math.random() * Key.DATABASE.length - 1);
    Key.current = Key.DATABASE[Key.index];
    return Key;
}());
exports.Key = Key;
