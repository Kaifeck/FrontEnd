/**
 * Created by Ryan on 30.11.2015.
 */
var should = require('should')
var setup = require('../src/setup.js')

describe('Teardown', function() {
  afterEach(function(){
    array = [1,2,3,4]
  })
  it('Should add to an array', function(){
    should(setup(array, 'add').length).equal(5)
  })
  it('Should return the first entry from an array', function (){
    should(setup(array, 'remove')).equal(1).and.be.a.Number()
  })
  it('Should throw error when nonsense is passed', function () {
    (function(){setup(null, null)}).should.throw()
  })
})
