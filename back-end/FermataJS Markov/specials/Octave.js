"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Octave = void 0;
var Button_1 = require("../Button");
var Note_1 = require("../music/Note");
var Octave = /** @class */ (function (_super) {
    __extends(Octave, _super);
    function Octave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Octave.onPress = function () {
        Button_1.Button.playNote();
        Octave.playOctave();
    };
    Octave.playOctave = function () {
        var octaveTone = "";
        var octaveDownorUp = [-12, 12];
        console.log('starting octave loop');
        for (var i = 0; i < Note_1.Note.DATABASE.length; i++) {
            if (Note_1.Note.lastAbsolute == Note_1.Note.DATABASE[i]) {
                console.log('playing octave tone');
                while (octaveTone == "" || octaveTone == null) {
                    octaveTone = Note_1.Note.DATABASE[i + octaveDownorUp[Math.floor(Math.random() * octaveDownorUp.length - 1)]];
                    console.log(octaveTone);
                }
            }
        }
        Button_1.load("" + Button_1.soundfilesPath + octaveTone + ".wav").then(Button_1.play);
        Note_1.Note.lastOctave = octaveTone;
    };
    return Octave;
}(Button_1.Button));
exports.Octave = Octave;
