/*!
 * Random JavaScript Library v1.0.0
 * Jeremy Zevin
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 7/8/16
 *
 */

class Random {
  public native;
  constructor(){
    this.native = Math.random;
  }
  //random integer beyween min and max
  public int (min=0,max=1):number {
    return Math.floor(this.native() * (max - min + 1) + min);
  }
  //random real number between min and max
  public real (min=0.0,max=1.0):number {
    return this.native() * (max - min) + min;
  }
  //random pick from an array
  public pick (array):any{
    return array[this.int(0,array.length-1)];
  }
  //boolean result based on result of expression
  public chance (percent:number=10):boolean{
    return percent/100 > this.native() ? true : false;
  }
  //random color rgb,rgba,hsl,hsla,hex
  public color (operation:string="rgb"):string {
    if(operation === 'hex'){
      let out = "#"
      for(let i = 0; i <= 5; i++){ out+= this.pick([0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]); }
      return out;
    } else if(operation === 'rgba') {
      return `rgba(${this.int(0,255)},${this.int(0,255)},${this.int(0,255)},${this.native()})`;
    } else if(operation === 'hsl') {
      return `hsl(${this.int(0,360)},${this.int(0,100)}%,${this.int(0,100)}%)`;
    } else if(operation === 'hsla') {
      return `hsla(${this.int(0,360)},${this.int(0,100)}%,${this.int(0,100)}%,${this.native()})`;
    } else {
      return `rgb(${this.int(0,255)},${this.int(0,255)},${this.int(0,255)})`;
    }
  }
}


export = Random;
