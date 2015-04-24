describe('iterator', function(){

  var Iterator = require('../lib/iterator');

  describe('next', function(){

    it('should return next value until end', function(){
      var it = new Iterator([1,2,3]);

      it.next().should.deep.equal({value: 1, done: false});
      it.next().should.deep.equal({value: 2, done: false});
      it.next().should.deep.equal({value: 3, done: false});
      it.next().should.deep.equal({value: null, done: true});
    });

    it('should maintain reference to items', function(){
      var items = [1];
      var it = new Iterator(items);

      it.next().should.deep.equal({value: 1, done: false});
      items.push(2);
      it.next().should.deep.equal({value: 2, done: false});
      it.next().should.deep.equal({value: null, done: true});
    });

  });


});