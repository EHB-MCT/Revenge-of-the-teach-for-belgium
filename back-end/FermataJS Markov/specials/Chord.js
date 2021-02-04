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
exports.Chord = void 0;
var Button_1 = require("../Button");
var Mode_1 = require("../music/Mode");
var Chord = /** @class */ (function (_super) {
    __extends(Chord, _super);
    function Chord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chord.onPress = function () {
        Mode_1.Mode.change();
        Button_1.Button.playNote();
        Button_1.Button.playChord();
    };
    return Chord;
}(Button_1.Button));
exports.Chord = Chord;
