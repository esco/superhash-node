describe('SuperHash', function () {
  var SuperHash = new require('../superhash');
  var hashMap;

  beforeEach(function () {
    hashMap = new SuperHash();
  });

  describe('.set(...keys, value)', function(){
    it('should set keys for value', function () {
      var expectedValue = 'val';
      hashMap.set(1,2,3,expectedValue);
      hashMap.get(1,2,3).should.equal(expectedValue);
    });

    it('should return reference to self', function(){
      var _hashMap = hashMap.set(1,2);
      _hashMap.should.equal(hashMap);
    });
  });

  describe('.get(...keys)', function(){
    it('should return value for known keys', function(){
      var expectedValue = 'val';
      hashMap.set(1,2,3,expectedValue);
      hashMap.get(1,2,3).should.equal(expectedValue);
    });

    it('should return undefined for unknown keys', function(){
      var expectedValue = 'val';
      var value = hashMap.get(1,2,3);
      should.equal(value, undefined);
    });
  });

  describe('.has(...keys)', function () {
    it('should return true for known keys', function(){
      hashMap.set(1,2,3,'val');
      hashMap.has(1,2,3).should.be.ok;
    });

    it('should return false for unknown keys', function(){
      hashMap.has(1,2,3).should.not.be.ok;
    });
  });

  describe('.delete(...keys)', function(){
    it('should remove key and return true', function(){
      var expectedValue = 'val';
      hashMap.set(1,2,3, expectedValue);
      should.exist(hashMap.delete(1,2,3));
      should.not.exist(hashMap.get(1,2,3));
    });

    it('should return false if key didn\'t exist', function(){
      var expectedValue = 'val';
      hashMap.set(1,2,3, expectedValue);
      hashMap.delete('a','b','c').should.not.be.ok;
    });
  });
});