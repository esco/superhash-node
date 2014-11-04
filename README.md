SuperHash
========

[![Build Status](https://travis-ci.org/esco/superhash.svg?branch=master)](https://travis-ci.org/esco/superhash) [![Coverage Status](https://coveralls.io/repos/esco/superhash/badge.png)](https://coveralls.io/r/esco/superhash) [![Code Climate](https://codeclimate.com/github/esco/superhash/badges/gpa.svg)](https://codeclimate.com/github/esco/superhash)

![superhash](http://i.imgur.com/JcPuyeW.png)

HashMap that supports using one or more keys of any type*

>Hash keys are generated using [multikey-hash](https://github.com/esco/multikey-hash)

## Installation

```
$ npm install superhash
```

## Examples

```js
var SuperHash = require('superhash');
var hashMap = new SuperHash;
var data = 'value';
```

Single key:
```js
hashMap.set(/.*/g, data);
//3163483247 <-- hash generated from
hashMap.get("/.*/g");
//undefined
hashMap.get(/.*/g);
//'value'
hashMap.delete(/.*/g);
//true <--- succesfully delete entry from hashMap
```

Multiple keys:
```js
hashMap.set(1,{ name: 'foo' }, true, data);
//1486633419 <-- hash generated from keys
hashMap.get(1,{ name: 'foo' }, "true");
//undefined
hashMap.get(1,{ name: 'foo' }, true);
//'value'
hashMap.delete(1,{ name: 'foo' }, true);
//true <--- succesfully delete entry from hashMap
```

## FAQ

### What types of keys can be used?

Any primitive or mutable object can be used as a key.

### Who named this module?
[@nik](http://github.com/nik)

## LICENSE
[MIT][license-url]

[license-url]: LICENSE
