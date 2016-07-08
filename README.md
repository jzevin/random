# random
A lightweight random library

## usage
```
var Random = require('./build/random.min.');
var random = new Random();

random.int(); // 0 or 1
random.int(1,100); // 1-100
random.int(-1,1); // -1,0, or -1

random.real(); // 0-1.0
random.real(1.0,10.0); // 1.0-10.0

random.pick([1,2,3]); // 1,2, or 3

random.color(); // 'rgb(?,?,?)'
random.color('rgb'); // 'rgb(?,?,?)'
random.color('rgba'); // 'rgba(?,?,?,?)'

random.color('hsl'); // 'hsl(?,?%,?%)'
random.color('hsla'); // 'hsla(?,?%,?%, ?%)'

random.color('hex'); // '#??????'
```
