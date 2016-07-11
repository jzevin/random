
<h1 align="center">
  <img src='https://raw.githubusercontent.com/phillyDesignr/random/master/docs/images/tiny-random-logo.png' alt="tiny random" />
  <h4 align="center">A super lightweight random javaScript library</h4>
</h1>

<p align="center">
  <a href="https://travis-ci.org/phillyDesignr/random">
    <img src="https://img.shields.io/travis/phillyDesignr/random.svg?style=flat-square"
         alt="Travis Build">
  </a>
  <a href="https://github.com/Raathigesh/Atmo/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/express.svg?maxAge=2592000&style=flat-square"
         alt="License">
  </a>
  <a href="https://www.npmjs.com/package/tiny-random">
    <img src="https://img.shields.io/npm/v/tiny-random.svg?style=flat-square"
         alt="NPM Version">
  </a>
</p>

## usage (Node.js)
### require
```
var Random = require('tiny-random');
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
