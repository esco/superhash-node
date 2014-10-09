describe('HashMap', function () {
  var MultiKeyHashMap = new require('../multikey');
  var map;

  beforeEach(function () {
    map = new MultiKeyHashMap();
  });

  describe('.set(...keys, value)', function(){
    it('should set keys for value', function () {
      var expectedKey = 2662625771;
      var expectedValue = 'val';

      map.set(1,2,3,expectedValue);
      map.store.should.have.property(expectedKey);
      map.store[expectedKey].should.equal(expectedValue);
    });
  });

  describe('.get(...keys)', function(){
    it('should return value for known keys', function(){
      var expectedValue = 'val';
      map.set(1,2,3,expectedValue);
      map.get(1,2,3).should.equal(expectedValue);
    });

    it('should return undefined for unknown keys', function(){
      var expectedValue = 'val';
      var value = map.get(1,2,3);
      should.equal(value, undefined);
    });
  });

  describe('.delete(...keys)', function(){
    it('should remove key and return true', function(){
      var expectedValue = 'val';
      map.set(1,2,3, expectedValue);
      should.exist(map.delete(1,2,3));
      should.not.exist(map.get(1,2,3));
    });

    it('should return false if key didn\'t exist', function(){
      var expectedValue = 'val';
      map.set(1,2,3, expectedValue);
      map.delete('a','b','c').should.not.be.ok;
    });
  });
});