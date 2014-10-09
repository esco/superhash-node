var MurmurHash3 = require('imurmurhash');
var hashState = MurmurHash3();
var toSource = require('tosource');
var date = new Date;

module.exports = function(){
  var args = [5, 'afuh08h3sfasfs40n340unfe0ruhn0unerf0u', function test(){console.log(test);}];
  hashState.hash(toSource(args));
  hashState.result();
}
