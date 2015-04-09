var object = { a: '1', b: '2', c: '3', d: '4', e: '5' };


module.exports = {
  tests: {
    'keys': function(){
      Object.keys(object).forEach(function(){

      });
    },

    'for..in': function() {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
        }
      }
    }
  }
}
