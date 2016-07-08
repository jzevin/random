/*!
 * Random JavaScript Library v1.0.0
 * Jeremy Zevin
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 1/11/16
 *
 */
"use strict";
var Random = (function () {
    function Random() {
        this.nativeRandom = Math.random;
    }
    //random integer beyween min and max
    Random.prototype.int = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.floor(this.nativeRandom() * (max - min + 1) + min);
    };
    //random real number between min and max
    Random.prototype.real = function (min, max) {
        if (min === void 0) { min = 0.0; }
        if (max === void 0) { max = 1.0; }
        return this.nativeRandom() * (max - min) + min;
    };
    //random pick from an array
    Random.prototype.pick = function (array) {
        return array[this.int(0, array.length - 1)];
    };
    Random.prototype.chance = function (percent) {
        if (percent === void 0) { percent = 10; }
        return percent / 100 > this.nativeRandom() ? true : false;
    };
    return Random;
}());
module.exports = Random;
