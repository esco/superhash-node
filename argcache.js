var MurmurHash3 = require('imurmurhash');

/**
 * Creates a new ArgCache
 *
 * @class
 * @api public
 */
function ArgCache() {
  this.store = {};
}

/**
 * Generates a cache key using arguments
 *
 * @param {...*} ...arguments - Used to generate the key with MurmurHash3
 * @return {Number} the generated hash
 * @api public
 */
ArgCache.prototype.getCacheKey = function() {
  var hashState = new MurmurHash3();
  var len = arguments.length;
  var arg;
  var part;

  for (var i = 0; i < len; i++) {
    arg = arguments[i];
    part = (typeof arg !== 'function') ? JSON.stringify(arg) : arg.toString();
    hashState.hash(part);
  }

  return hashState.result();
};

/**
 * Creates a key from the arguments if it doesn't exist and sets the last argument passed in as the value
 *
 * @param {...*} ...arguments - Used to generate key except for the last one which is the value to be associated with the key
 * @return {Number} the key associated with the arguments (minus the last one)
 * @api public
 */
ArgCache.prototype.set = function() {
  var value = Array.prototype.splice.call(arguments, arguments.length-1, arguments.length)[0];
  var key = this.getCacheKey.apply(this, arguments);

  this.store[key] = value;
  return key;
};

/**
 * Returns the value associated with the key generated from the arguments
 *
 * @param {...*} ...arguments - Used to generate a key for lookup
 * @return {Object} value associated with generated key
 * @api public
 */
ArgCache.prototype.get = function() {
  var key = this.getCacheKey.apply(this, arguments);

  return this.store[key];
};

/**
 * Remove the key and associated value
 *
 * @param {...*} ...arguments - Used to generate a key for lookup
 * @return {Boolean} whether the key existed or not
 * @api public
 */
ArgCache.prototype.delete = function() {
  var key = this.getCacheKey.apply(this, arguments);

  if (!key) {
    return false;
  }
  return delete this.store[key];
};

module.exports = ArgCache;