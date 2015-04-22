describe('SuperHash', function () {
  var SuperHash = new require('../superhash');
  var hashMap;

  beforeEach(function () {
    hashMap = new SuperHash();
  });

  describe('SuperHash()', function(){
    it('should add entries passed to contstructor', function(){
      var key1 = { foo: 'bar' };
      var key2 = { blip: 'blop' };
      var hmap = new SuperHash([[[1,2,3],'foo'], [[key1, key2],'bar']]);

      hmap.get(1,2,3).should.equal('foo');
      hmap.get(key1, key2).should.equal('bar');
    });
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

    it('should increment size when new entries are added', function(){
      hashMap
        .set(1,2,3, 'value1')
        .set('a','b', 'value2');
      hashMap.size.should.equal(2);
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

    it('should decrease size when entries are removed', function(){
      hashMap
        .set(1,2,3, 'value1')
        .set('a','b', 'value2');
      hashMap.delete('a','b');
      hashMap.size.should.equal(1);
    });
  });

  describe('.keys()', function () {
    it('should return the keys used in the map', function(){
      var key1 = { foo: 'bar' };
      var key2 = { blip: 'blop' };
      var expectedKeys = [[1,2,3], [key1, key2]].sort();

      hashMap.set(1,2,3, 'foo');
      hashMap.set(key1, key2, 'bar');
      hashMap.keys().sort().should.deep.equal(expectedKeys);
    });

    it('should return empty array when there are no keys', function(){
      var expectedKeys = [];
      hashMap.keys().should.deep.equal(expectedKeys);
    });
  });

  describe('.values()', function () {
    it('should return the values in the map', function(){
      var key1 = { foo: 'bar' };
      var key2 = { blip: 'blop' };
      var expectedValues = ['foo' ,'bar'].sort();

      hashMap.set(1,2,3, 'foo');
      hashMap.set(key1, key2, 'bar');
      hashMap.values().sort().should.deep.equal(expectedValues);
    });

    it('should return empty array when there are no values', function(){
      var expectedValues = [];
      hashMap.values().should.deep.equal(expectedValues);
    });
  });

  describe('.entries()', function () {
    it('should return the entries in the map', function(){
      var key1 = { foo: 'bar' };
      var key2 = { blip: 'blop' };
      var expectedEntries = [[[1,2,3],'foo'], [[key1, key2],'bar']].sort();

      hashMap.set(1,2,3, 'foo');
      hashMap.set(key1, key2, 'bar');
      hashMap.entries().sort().should.deep.equal(expectedEntries);
    });

    it('should return empty array when there are no entries', function(){
      var expectedEntries = [];
      hashMap.entries().should.deep.equal(expectedEntries);
    });
  });

  describe('.forEach(cb,thisArg)', function () {
    it('should invoke callback for each entry', function(){
      var key1 = { foo: 'bar' };
      var key2 = { blip: 'blop' };
      var expectedEntries = [[[1,2,3],'foo'], [[key1, key2],'bar']];
      var thisArg = {};
      var cb = sinon.spy(function(){
        this.should.equal(thisArg);
      });

      hashMap.set(1,2,3, 'foo');
      hashMap.set(key1, key2, 'bar');
      hashMap.forEach(cb, thisArg);

      cb.should.have.been.calledTwice;
      cb.should.have.been.calledWith('foo', [1,2,3]);
      cb.should.have.been.calledWith('bar', [key1, key2]);
    });
  });

  describe('.clear()', function() {
    it('should remove all entries', function(){
      var key1 = { foo: 'bar' };
      var key2 = { blip: 'blop' };
      var expectedEntries = [];

      hashMap.set(1,2,3, 'foo');
      hashMap.set(key1, key2, 'bar');
      hashMap.clear();
      hashMap.entries().should.deep.equal(expectedEntries);
      hashMap.size.should.equal(0);
    });
  });
});