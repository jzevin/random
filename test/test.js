var assert = require('chai').assert;
var expect = require('chai').expect;
var Random = require('../build/Random');
var rnd = new Random();

describe('Random', function() {

  describe('#rnd()',function(){
    it('should be instance of Random', function() {
      expect(rnd).to.be.instanceOf(Random);
    });
    it('should respond to int, real, pick, chance', function() {
      expect(rnd).itself.to.respondTo('int');
      expect(rnd).itself.to.respondTo('real');
      expect(rnd).itself.to.respondTo('pick');
      expect(rnd).itself.to.respondTo('chance');
    });

  });

  describe('#int()',function(){
    it('should return 0 or 1 if no args are given', function() {
      expect(rnd.int()).to.be.above(-1).and.below(2);
    });

    it('should return a number between 1, 4', function() {
      expect(rnd.int(1,4)).to.be.above(0).and.below(5);
    });

    it('should return a number between -1, 1', function() {
      expect(rnd.int(-1,1)).to.be.above(-2).and.below(2);
    });


  });
});
