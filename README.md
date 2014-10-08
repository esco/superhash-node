[![Build Status](https://travis-ci.org/esco/argmap.svg?branch=master)](https://travis-ci.org/esco/argmap) [![Coverage Status](https://coveralls.io/repos/esco/argmap/badge.png)](https://coveralls.io/r/esco/argmap) [![Code Climate](https://codeclimate.com/github/esco/argmap/badges/gpa.svg)](https://codeclimate.com/github/esco/argmap)

argmap
========

Map that uses method arguments as the key.

Keys are generated using a string representation of all but the last of the arguments passed to `.set()` using the [MurmurHash3](http://en.wikipedia.org/wiki/MurmurHash) algorithm for efficient memory usage, speed and random distribution. The last argument is that value to be associated with the key.

```
npm install argmap
```

## Examples

```js
var ArgMap = require('argmap');
var map = new ArgMap;
var data = 'value';

map.set(1,{ name: 'foo' }, true, data);
//2207988983 <-- key generated from arguments
map.get(1,{ name: 'foo' }, true);
//'value'
map.delete(1,{ name: 'foo' }, true);
//true <--- succesfully delete key,val pair from map
```

## FAQ

### What types can be used to create a hash key?

Thanks to [toSource](https://github.com/marcello3d/node-tosource) the following types are supported

* Numbers
* Strings
* Array literals
* object literals
* function
* RegExp literals
* Dates
* true
* false
* undefined
* null
* NaN
* Infinity