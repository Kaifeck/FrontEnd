/**
 * Created by Ryan on 25.11.2015.
 */
var should = require('should');
var loops = require('../src/loops.js');

  describe('loops', function() {
    it('Should add to array', function() {
      should(loops(2)).equal(4)
    })
  })
