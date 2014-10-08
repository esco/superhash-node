
* [`ArgMap`](#argmap)
* [`getKey(arguments)`](#getkeyarguments)
* [`set(arguments)`](#setarguments)
* [`get(arguments)`](#getarguments)
* [`delete(arguments)`](#deletearguments)

### `ArgMap`

Creates a new ArgMap
### `getKey(arguments)`
* **arguments** (`...*`) - Used to generate the key with [MurmurHash3](https://github.com/jensyt/imurmurhash-js)

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