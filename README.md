[![Build Status](https://travis-ci.org/esco/multikey.svg?branch=master)](https://travis-ci.org/esco/multikey) [![Coverage Status](https://coveralls.io/repos/esco/multikey/badge.png)](https://coveralls.io/r/esco/multikey) [![Code Climate](https://codeclimate.com/github/esco/multikey/badges/gpa.svg)](https://codeclimate.com/github/esco/multikey)

multikey
========

HashMap that uses supports using multiple keys of any type.

Hash keys are generated by serializing all but the last of the arguments passed to `.set()` and hashing them using the [MurmurHash3](http://en.wikipedia.org/wiki/MurmurHash) algorithm for efficient memory usage (small sized hashes), speed and random distribution. The last argument is the value to be associated (mapped) with the key.

```
npm install multikey
```

## Examples

```js
var MultiKeyHashMap = require('multikey');
var map = new MultiKeyHashMap;
var data = 'value';

map.set(1,{ name: 'foo' }, true, data);
//2207988983 <-- key generated from arguments
map.get(1,{ name: 'foo' }, true);
//'value'
map.delete(1,{ name: 'foo' }, true);
//true <--- succesfully delete keys,val pair from map
```

## FAQ

### What types of objects can be used to create a hash key?

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