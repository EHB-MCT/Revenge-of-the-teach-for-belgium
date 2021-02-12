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
exports.Small = void 0;
var Button_1 = require("../Button");
var Small = /** @class */ (function (_super) {
    __extends(Small, _super);
    function Small() {
        return _super.call(this) || this;
    }
    Small.onPress = function () {
        console.log('playing smoll not');
        Button_1.Button.playNote();
    };
    ;
    return Small;
}(Button_1.Button));
exports.Small = Small;
//export default Small;
