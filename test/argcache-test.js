describe('Cache', function () {
  var ArgCache = new require('../argcache');
  var cache;

  beforeEach(function () {
    cache = new ArgCache();
  });

  describe('.set(args, value)', function(){
    it('should set key with value', function () {
      var expectedKey = 2662625771;
      var expectedValue = 'val';

      cache.set(1,2,3,expectedValue);
      cache.store.should.have.property(expectedKey);
      cache.store[expectedKey].should.equal(expectedValue);
    });
  });

  describe('.get(key)', function(){
    it('should return value for known key', function(){
      var expectedValue = 'val';
      cache.set(1,2,3,expectedValue);
      cache.get(1,2,3).should.equal(expectedValue);
    });

    it('should return null for unknown key', function(){
      var expectedValue = 'val';
      var value = cache.get(1,2,3);
      should.not.exist(value);
    });
  });

  describe('.delete(key)', function(){
    it('should remove key and return true', function(){
      var expectedValue = 'val';
      cache.set(1,2,3, expectedValue);
      should.exist(cache.delete(1,2,3));
      should.not.exist(cache.get(1,2,3));
    });

    it('should return false if key didn\'t exist', function(){
      var expectedValue = 'val';
      var result;

      cache.set(1,2,3, expectedValue);
      result = cache.delete(1,2,3);
      should.exist(result);
    });
  });

  describe('.getCacheKey', function () {
    it('should get cache key from numbers', function(){
      var expectedKey = 2662625771;
      var key = cache.getCacheKey(1,2,3);
      key.should.equal(expectedKey);
    });

    it('should get cache key from objects', function(){
      var expectedKey = 975194425;
      var key = cache.getCacheKey(1,{b:2},3);
      key.should.deep.equal(expectedKey);
    });

    it('should get cache key from function', function(){
      var expectedKey = 1298964773;
      var key = cache.getCacheKey(1,{b:2},test);

      function test(arg) {
        console.log(arg);
      }

      key.should.equal(expectedKey);
    });
  });

});