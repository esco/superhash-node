var SuperHash = require('../superhash');
var HashMap = require('hashmap').HashMap;
var es6Collections = require('es6-collections');

var key = [[1,2,{ name: 'foo' },'ref'],1,2];
var superhash = new SuperHash;
var hashmap = new HashMap;
var map = new Map;

for (var i = 0; i < 100; i++) {
  superhash.set(i,i);
  hashmap.set(i,i);
  map.set(i,i);
}

module.exports = {
  tests: {
    'superhash': function(){
      superhash.set(key, 'value');
    },

    'hashmap': function() {
      hashmap.set(key, 'value');
    },

    'map': function() {
      map.set(key, 'value');
    }
  }
}
