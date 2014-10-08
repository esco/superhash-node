[![Build Status](https://travis-ci.org/esco/argmap.svg?branch=master)](https://travis-ci.org/esco/argmap) [![Coverage Status](https://img.shields.io/coveralls/esco/argmap.svg)](https://coveralls.io/r/esco/argmap) [![Code Climate](https://codeclimate.com/github/esco/argmap/badges/gpa.svg)](https://codeclimate.com/github/esco/argmap)

argmap
========

Cache utility that uses method arguments as the key.

```
npm install argmap
```

## API

* [`ArgMap`](#argmap)
* [`getKey(arguments)`](#getkeyarguments)
* [`set(arguments)`](#setarguments)
* [`get(arguments)`](#getarguments)
* [`delete(arguments)`](#deletearguments)

### `ArgMap`

Creates a new ArgMap
### `getKey(arguments)`
* **arguments** (`...*`) - Used to generate the key with MurmurHash3

Generates a key using arguments
### `set(arguments)`
* **arguments** (`...*`) - Used to generate key except for the last one which is the value to be associated with the key

Creates a key from the arguments if it doesn't exist and sets the last argument passed in as the value
### `get(arguments)`
* **arguments** (`...*`) - Used to generate a key for lookup

Returns the value associated with the key generated from the arguments
### `delete(arguments)`
* **arguments** (`...*`) - Used to generate a key for lookup

Removes the key and associated value

## Examples

```javascript
var map = new ArgMap;
var data = { views: 3 };

// generates key using all arguments except for the last one
// sets `data` as the value for the generated key
// returns the key
map.set(1,{ name: 'foo' }, true, data);

// returns `data`
map.get(1,{ name: 'foo' }, true);
```