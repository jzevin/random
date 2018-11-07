"use strict";
/*!
 * Random JavaScript Library v1.5.1
 * Jeremy Zevin
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 10/6/18
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Random = /** @class */ (function () {
    function Random() {
        this.native = Math.random;
        this.uniq = this.unique;
    }
    //random integer beyween min and max
    Random.prototype.int = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.floor(this.native() * (max - min + 1) + min);
    };
    //random real number between min and max
    Random.prototype.real = function (min, max) {
        if (min === void 0) { min = 0.0; }
        if (max === void 0) { max = 1.0; }
        return this.native() * (max - min) + min;
    };
    //random pick from an array
    Random.prototype.pick = function (array) {
        return array[this.int(0, array.length - 1)];
    };
    //boolean result based on result of expression
    Random.prototype.chance = function (percent) {
        if (percent === void 0) { percent = 10; }
        return percent / 100 > this.native() ? true : false;
    };
    //random color rgb,rgba,hsl,hsla,hex
    Random.prototype.color = function (operation) {
        if (operation === void 0) { operation = "rgb"; }
        if (operation === 'hex') {
            var out = "#";
            for (var i = 0; i <= 5; i++) {
                out += this.pick([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]);
            }
            return out;
        }
        else if (operation === 'rgba') {
            return "rgba(" + this.int(0, 255) + "," + this.int(0, 255) + "," + this.int(0, 255) + "," + this.native() + ")";
        }
        else if (operation === 'hsl') {
            return "hsl(" + this.int(0, 360) + "," + this.int(0, 100) + "%," + this.int(0, 100) + "%)";
        }
        else if (operation === 'hsla') {
            return "hsla(" + this.int(0, 360) + "," + this.int(0, 100) + "%," + this.int(0, 100) + "%," + this.native() + ")";
        }
        else {
            return "rgb(" + this.int(0, 255) + "," + this.int(0, 255) + "," + this.int(0, 255) + ")";
        }
    };
    Random.prototype.unique = function (array, howMany) {
        if (howMany === void 0) { howMany = 0; }
        if (howMany > array.length)
            return false;
        if (howMany === 0)
            howMany = array.length;
        var results = [];
        while (results.length < howMany) {
            var randomObj = this.pick(array);
            var found = false;
            for (var i = 0; i < results.length; i++) {
                if (results[i] == randomObj) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                results.push(randomObj);
            }
        }
        return results;
    };
    return Random;
}());
exports.Random = Random;
//# sourceMappingURL=random.js.map