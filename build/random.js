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
    }
    //random integer beyween min and max
    Random.prototype.int = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    //random real number between min and max
    Random.prototype.real = function (min, max) {
        if (min === void 0) { min = 0.0; }
        if (max === void 0) { max = 1.0; }
        return Math.random() * (max - min) + min;
    };
    Random.prototype.pick = function () {
        return true;
    };
    Random.prototype.chance = function () {
        return true;
    };
    return Random;
}());
module.exports = Random;
