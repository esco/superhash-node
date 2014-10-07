var MurmurHash3 = require('imurmurhash');

function ArgCache() {
  this.store = {};
}

ArgCache.prototype.getCacheKey = function() {
  var hashState = new MurmurHash3();
  var len = arguments.length;
  var arg;
  var part;

  for (var i = 0; i < len; i++) {
    arg = arguments[i];
    part = (typeof arg != 'function') ? JSON.stringify(arg) : arg.toString();
    hashState.hash(part);
  }

  return hashState.result();
};

ArgCache.prototype.set = function() {
  var value = Array.prototype.splice.call(arguments, arguments.length-1, arguments.length)[0];
  var key = this.getCacheKey.apply(this, arguments);
  this.store[key] = value;
  return key;
};

ArgCache.prototype.get = function() {
  var key = this.getCacheKey.apply(this, arguments);
  return this.store[key];
};

ArgCache.prototype.delete = function() {
  var key = this.getCacheKey.apply(this, arguments);
  if (!key) {
    return false;
  }
  return delete this.store[key];
};

module.exports = ArgCache;