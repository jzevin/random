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

class Random {
  constructor(){}
  private nativeRandom = Math.random;
  //random integer beyween min and max
  public int (min=0,max=1):number {
    return Math.floor(this.nativeRandom() * (max - min + 1) + min);
  }
  //random real number between min and max
  public real (min=0.0,max=1.0):number {
    return this.nativeRandom() * (max - min) + min;
  }
  //random pick from an array
  public pick (array):any{
    return array[this.int(0,array.length-1)];
  }

  public chance (percent:number=10):boolean{
    return percent/100 > this.nativeRandom() ? true : false;
  }
}

//export const random = new Random();
//module.exports = new Random();
export = Random;
