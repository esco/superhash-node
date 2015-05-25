SuperHash
========

[![Build Status](https://travis-ci.org/esco/superhash.svg?branch=master)](https://travis-ci.org/esco/superhash) [![Coverage Status](https://coveralls.io/repos/esco/superhash/badge.png)](https://coveralls.io/r/esco/superhash) [![Code Climate](https://codeclimate.com/github/esco/superhash/badges/gpa.svg)](https://codeclimate.com/github/esco/superhash)

![superhash](http://i.imgur.com/JcPuyeW.png)

HashMap that supports using one or more keys of any type*

>Hash keys are generated using [esco/multikey-hash](https://github.com/esco/multikey-hash)

## Installation

```
$ npm install superhash
```

## Examples

```js
var SuperHash = require('superhash');
var hashMap = new SuperHash();
var data = 'value';
```

Single key:
```js
hashMap.set(5, data);
hashMap.get("5"); // returns undefined
hashMap.get(5); // returns 'value'
hashMap.delete(5); // returns true
```

Multiple keys:
```js
var obj = { name: 'foo' };
hashMap.set(1, obj, true, data);
hashMap.get(1, obj, "true"); // returns undefined
hashMap.get(1, obj, true); // returns 'value'
hashMap.delete(1, obj, true); // returns true
```

## API
[See API.md][api-url]

## FAQ

### What types of keys can be used?

Any primitive or mutable object can be used as a key.

### Who named this module?
[@nik](http://github.com/nik)

## LICENSE
[MIT][license-url]

[license-url]: LICENSE
[api-url]: API.md
