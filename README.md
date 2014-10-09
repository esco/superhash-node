multikey
========

[![Build Status](https://travis-ci.org/esco/multikey.svg?branch=master)](https://travis-ci.org/esco/multikey) [![Coverage Status](https://coveralls.io/repos/esco/multikey/badge.png)](https://coveralls.io/r/esco/multikey) [![Code Climate](https://codeclimate.com/github/esco/multikey/badges/gpa.svg)](https://codeclimate.com/github/esco/multikey)

HashMap that supports using multiple keys of any type*

>Hash keys are generated using [multikey-hash](https://github.com/esco/multikey-hash)

## Installation

```
$ npm install multikey
```

## Examples

```js
var MultiKeyHashMap = require('multikey');
var map = new MultiKeyHashMap;
var data = 'value';
```

Single key:
```js
map.set(/.*/g, data);
//3163483247 <-- hash generated from
map.get("/.*/g");
//undefined
map.get(/.*/g);
//'value'
map.delete(/.*/g);
//true <--- succesfully delete entry from map
```

Multiple keys:
```js
map.set(1,{ name: 'foo' }, true, data);
//1486633419 <-- hash generated from keys
map.get(1,{ name: 'foo' }, "true");
//undefined
map.get(1,{ name: 'foo' }, true);
//'value'
map.delete(1,{ name: 'foo' }, true);
//true <--- succesfully delete entry from map
```

## FAQ

### What types of objects can be used as a key?

*Thanks to [toSource](https://github.com/marcello3d/node-tosource) the following types are supported

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

## LICENSE
multikey is open source software under the