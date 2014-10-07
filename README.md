[![Build Status](https://travis-ci.org/esco/argcache.svg?branch=master)](https://travis-ci.org/esco/argcache) [![Coverage Status](https://img.shields.io/coveralls/esco/argcache.svg)](https://coveralls.io/r/esco/argcache) [![Code Climate](https://codeclimate.com/github/esco/argcache/badges/gpa.svg)](https://codeclimate.com/github/esco/argcache)

argcache
========

Cache utility that uses method arguments as the key.

```
npm install argcache
```

## API

* [`ArgCache`](#argcache)
* [`getCacheKey(arguments)`](#getcachekeyarguments)
* [`set(arguments)`](#setarguments)
* [`get(arguments)`](#getarguments)
* [`delete(arguments)`](#deletearguments)

### `ArgCache`

Creates a new ArgCache
### `getCacheKey(arguments)`
* **arguments** (`...*`) - Used to generate the key with MurmurHash3

Generates a cache key using arguments
### `set(arguments)`
* **arguments** (`...*`) - Used to generate key except for the last one which is the value to be associated with the key

Creates a key from the arguments if it doesn't exist and sets the last argument passed in as the value
### `get(arguments)`
* **arguments** (`...*`) - Used to generate a key for lookup

Returns the value associated with the key generated from the arguments
### `delete(arguments)`
* **arguments** (`...*`) - Used to generate a key for lookup

Remove the key and associated value

## Examples