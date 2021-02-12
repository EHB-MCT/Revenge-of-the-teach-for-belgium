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
exports.Harmony = void 0;
var Button_1 = require("../Button");
var Intervals_1 = require("../music/Intervals");
var Note_1 = require("../music/Note");
var Button_2 = require("../Button");
var Harmony = /** @class */ (function (_super) {
    __extends(Harmony, _super);
    function Harmony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Harmony.onPress = function () {
        Button_1.Button.playNote();
        Harmony.playHarmonyTone();
    };
    Harmony.playHarmonyTone = function () {
        var harmonyTone;
        var choices = [];
        var i /* :Map<String, String> */ = Intervals_1.Intervals.loadout;
        if (Note_1.Note.lastAbsolute == i.get("one1"))
            choices = [i.get("thr1"), i.get("fiv1"), i.get("thr2"), i.get("fiv2")];
        else if (Note_1.Note.lastAbsolute == i.get("two1"))
            choices = [i.get("fiv1"), i.get("sev1"), i.get("fiv2")];
        else if (Note_1.Note.lastAbsolute == i.get("thr1"))
            choices = [i.get("fiv1"), i.get("one2")];
        else if (Note_1.Note.lastAbsolute == i.get("for1"))
            choices = [i.get("fiv1"), i.get("one2"), i.get("two2")];
        else if (Note_1.Note.lastAbsolute == i.get("fiv1"))
            choices = [i.get("thr1"), i.get("sev1"), i.get("thr2")];
        else if (Note_1.Note.lastAbsolute == i.get("six1"))
            choices = [i.get("one2"), i.get("thr2")];
        else if (Note_1.Note.lastAbsolute == i.get("sev1"))
            choices = [i.get("thr1"), i.get("fiv1"), i.get("thr2")];
        else if (Note_1.Note.lastAbsolute == i.get("one2"))
            choices = [i.get("fiv1"), i.get("thr2"), i.get("fiv2")];
        else if (Note_1.Note.lastAbsolute == i.get("two2"))
            choices = [i.get("fiv1"), i.get("fiv2"), i.get("sev2")];
        else if (Note_1.Note.lastAbsolute == i.get("thr2"))
            choices = [i.get("sev1"), i.get("one2"), i.get("fiv2"), i.get("sev2"), i.get("one3")];
        else if (Note_1.Note.lastAbsolute == i.get("for2"))
            choices = [i.get("two2"), i.get("fiv2"), i.get("one3")];
        else if (Note_1.Note.lastAbsolute == i.get("fiv2"))
            choices = [i.get("thr2"), i.get("sev2"), i.get("thr3")];
        else if (Note_1.Note.lastAbsolute == i.get("six2"))
            choices = [i.get("one3"), i.get("thr3")];
        else if (Note_1.Note.lastAbsolute == i.get("sev2"))
            choices = [i.get("thr2"), i.get("fiv2"), i.get("thr3")];
        else if (Note_1.Note.lastAbsolute == i.get("one3"))
            choices = [i.get("thr2"), i.get("fiv2"), i.get("thr3"), i.get("fiv3")];
        else if (Note_1.Note.lastAbsolute == i.get("two3"))
            choices = [i.get("fiv2"), i.get("sev2"), i.get("fiv3")];
        else if (Note_1.Note.lastAbsolute == i.get("thr3"))
            choices = [i.get("sev2"), i.get("one3"), i.get("fiv3"), i.get("sev3"), i.get("one4")];
        else if (Note_1.Note.lastAbsolute == i.get("for3"))
            choices = [i.get("two3"), i.get("fiv3"), i.get("one4")];
        else if (Note_1.Note.lastAbsolute == i.get("fiv3"))
            choices = [i.get("thr3"), i.get("sev3"), i.get("one4")];
        else if (Note_1.Note.lastAbsolute == i.get("six3"))
            choices = [i.get("thr3"), i.get("one4")];
        else if (Note_1.Note.lastAbsolute == i.get("sev3"))
            choices = [i.get("thr3"), i.get("fiv3")];
        else if (Note_1.Note.lastAbsolute == i.get("one4"))
            choices = [i.get("thr3"), i.get("fiv3")];
        harmonyTone = Math.floor(Math.random() * choices.length);
        var harmony;
        harmony = new Button_2.Sound.play(harmonyTone);
        Note_1.Note.lastHarmony = harmonyTone;
    };
    return Harmony;
}(Button_1.Button));
exports.Harmony = Harmony;
