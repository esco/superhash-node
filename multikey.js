var MurmurHash3 = require('imurmurhash');
var toSource = require('tosource');

/**
 * Creates a new MultiKeyHashMap
 *
 * @class
 * @api public
 */
function MultiKeyHashMap() {
  this.store = {};
}

/**
 * Generates a key using arguments
 *
 * @param {...*} keys - Used to generate the key with [MurmurHash3](https://github.com/jensyt/imurmurhash-js)
 * @return {Number} the generated hash
 * @api public
 */
MultiKeyHashMap.prototype.hash = function() {
  return MurmurHash3(toSource(arguments)).result();
};

/**
 * Creates a hash from the keys if it doesn't exist and sets the last argument passed in as the value
 *
 * @param {...*} keys - Used to generate hash
 * @param {*} to be associated with the key
 * @return {Number} the hash associated with the keys
 * @api public
 */
MultiKeyHashMap.prototype.set = function() {
  var len = arguments.length;
  var value = Array.prototype.splice.call(arguments, len-1, len)[0];
  var key = this.hash.apply(this, arguments);

  this.store[key] = value;
  return key;
};

/**
 * Returns the value associated with the hash generated from the keys
 *
 * @param {...*} keys - Used to generate a hash for lookup
 * @return {Object} value associated with generated hash
 * @api public
 */
MultiKeyHashMap.prototype.get = function() {
  var key = this.hash.apply(this, arguments);

  return this.store[key];
};

/**
 * Removes the hash generated by the keys and the associated value
 *
 * @param {...*} keys - Used to generate a hash for lookup
 * @return {Boolean} whether the hash existed or not
 * @api public
 */
MultiKeyHashMap.prototype.delete = function() {
  var key = this.hash.apply(this, arguments);

  if (!this.store[key]) {
    return false;
  }
  return delete this.store[key];
};

module.exports = MultiKeyHashMap;