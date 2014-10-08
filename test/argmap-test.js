describe('Map', function () {
  var ArgMap = new require('../argmap');
  var map;

  beforeEach(function () {
    map = new ArgMap();
  });

  describe('.set(args, value)', function(){
    it('should set key with value', function () {
      var expectedKey = 1438329965;
      var expectedValue = 'val';

      map.set(1,2,3,expectedValue);
      map.store.should.have.property(expectedKey);
      map.store[expectedKey].should.equal(expectedValue);
    });
  });

  describe('.get(key)', function(){
    it('should return value for known key', function(){
      var expectedValue = 'val';
      map.set(1,2,3,expectedValue);
      map.get(1,2,3).should.equal(expectedValue);
    });

    it('should return null for unknown key', function(){
      var expectedValue = 'val';
      var value = map.get(1,2,3);
      should.not.exist(value);
    });
  });

  describe('.delete(key)', function(){
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

  describe('.getKey', function () {
    it('should get map key from numbers', function(){
      var expectedKey = 1438329965;
      var key = map.getKey(1,2,3);
      key.should.equal(expectedKey);
    });

    it('should get map key from objects', function(){
      var expectedKey = 3423628354;
      var key = map.getKey(1,{b:2},3);
      key.should.deep.equal(expectedKey);
    });

    it('should get map key from function', function(){
      var expectedKey = 2840318591;
      var key = map.getKey(1,{b:2},test);

      function test(arg) {
        console.log(arg);
      }

      key.should.equal(expectedKey);
    });
  });

});