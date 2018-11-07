# ![tiny random](https://raw.githubusercontent.com/phillyDesignr/random/master/docs/images/tiny-random-logo.png)

## A super lightweight random javaScript library

[![Travis Build](https://img.shields.io/travis/phillyDesignr/random.svg?style=flat-square)](https://travis-ci.org/phillyDesignr/random) [![License](https://img.shields.io/npm/l/express.svg?maxAge=2592000&style=flat-square)](https://github.com/Raathigesh/Atmo/blob/master/LICENSE) [![NPM Version](https://img.shields.io/npm/v/tiny-random.svg?style=flat-square)](https://www.npmjs.com/package/tiny-random)

## usage (Node.js)

### require

```
import { Random } from 'tiny-random';
var random = new Random();
```

#### integers

```
random.int(); // 0 or 1
random.int(1,100); // 1-100
random.int(-1,1); // -1,0, or -1
```

#### real(floats)

```
random.real(); // 0-1.0
random.real(1.0,10.0); // 1.0-10.0
```

#### pick from array

```
random.pick([1,2,3]); // 1,2, or 3
```

#### colors

```
random.color(); // 'rgb(?,?,?)'
random.color('rgb'); // 'rgb(?,?,?)'
random.color('rgba'); // 'rgba(?,?,?,?)'

random.color('hsl'); // 'hsl(?,?%,?%)'
random.color('hsla'); // 'hsla(?,?%,?%, ?%)'

random.color('hex'); // '#??????'
```

#### pick unique or uniq elements from an array

```
random.unique([1,2,3],2); // [1,2] or [3,1] or [3,2] etc...
random.unique([
  {obj:'foo'},
  {obj:'bar'}
],1); // [{obj:'foo'}] or [{obj:'bar'}]
```
