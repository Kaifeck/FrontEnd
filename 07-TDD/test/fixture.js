/**
 * Created by Ryan on 30.11.2015.
 */
var should = require('should')
var fixture = require('../src/fixture.js')
var artist1 = {name:"Bryan Adams", title:"Summer of 96"}
var artist2 = {name:"DJ Horvath", title:"Anton aus Tirol"}

describe('Fixtures', function() {
  it('Should correct the songtitle', function() {
    should(fixture.changeTitle(artist1, 'Summer of 69')).equal('Summer of 69')
  })

  it('Should correct the Artist Name', function() {
    should(fixture.changeArtist(artist2, 'DJ Ötzi')).equal('DJ Ötzi')
  })
})



