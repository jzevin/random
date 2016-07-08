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
  //random integer beyween min and max
  int (min=0,max=1):number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //random real number between min and max
  real (min=0.0,max=1.0):number {
    return Math.random() * (max - min) + min;
  }

  pick ():any{
    return true;
  }

  chance ():boolean{
    return true;
  }
}

//export const random = new Random();
//module.exports = new Random();
export = Random;
