var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');

global.should = chai.should();
global.sinon = require('sinon');

chai.use(sinonChai);
