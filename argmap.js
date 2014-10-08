var MurmurHash3 = require('imurmurhash');
var toSource = require('tosource');

/**
 * Creates a new ArgMap
 *
 * @class
 * @api public
 */
function ArgMap() {
  this.store = {};
}

/**
 * Generates a key using arguments
 *
 * @param {...*} arguments - Used to generate the key with [MurmurHash3](https://github.com/jensyt/imurmurhash-js)
 * @return {Number} the generated hash
 * @api public
 */
ArgMap.prototype.getKey = function() {
  return MurmurHash3(toSource(arguments)).result();
};

/**
 * Creates a key from the arguments if it doesn't exist and sets the last argument passed in as the value
 *
 * @param {...*} arguments - Used to generate key except for the last one which is the value to be associated with the key
 * @return {Number} the key associated with the arguments (minus the last one)
 * @api public
 */
ArgMap.prototype.set = function() {
  var value = Array.prototype.splice.call(arguments, arguments.length-1, arguments.length)[0];
  var key = this.getKey.apply(this, arguments);

  this.store[key] = value;
  return key;
};

/**
 * Returns the value associated with the key generated from the arguments
 *
 * @param {...*} arguments - Used to generate a key for lookup
 * @return {Object} value associated with generated key
 * @api public
 */
ArgMap.prototype.get = function() {
  var key = this.getKey.apply(this, arguments);

  return this.store[key];
};

/**
 * Removes the key and associated value
 *
 * @param {...*} arguments - Used to generate a key for lookup
 * @return {Boolean} whether the key existed or not
 * @api public
 */
ArgMap.prototype.delete = function() {
  var key = this.getKey.apply(this, arguments);

  if (!this.store[key]) {
    return false;
  }
  return delete this.store[key];
};

module.exports = ArgMap;