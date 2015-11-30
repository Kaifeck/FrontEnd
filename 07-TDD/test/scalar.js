/**
 * Created by Ryan on 23.11.2015.
 */
var should = require('should');
var scalar = require('../src/scalar.js');

describe('scalar', function () {
  it('should take number as input', function () {
    should(scalar(10)).be.a.Number()
  })

  it('should take string as input', function() {
    should(scalar('testext')).be.a.String()
  })
  it('should take boolean as input', function() {
    should(scalar(true)).be.a.Boolean()
  })
  it('Shouldnt take NULL', function() {
    (function(){ scalar(null)}).should.throw()
  })
})
