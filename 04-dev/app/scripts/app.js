import $ from 'jquery'
import page from 'page'
import tplHome from './templates/home.hbs'
import tplDrivers from './templates/drivers.hbs'
import fetch from 'isomorphic-fetch'

const $content = $('#content')

page('/home', function() {
  fetch('http://ergast.com/api/f1/drivers.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      $content.html(tplDrivers({drivers: data.MRData.DriverTable.Drivers}))
    })
    .catch(err => {

    })
})
page('*', function() {
  console.log('not found')
})
page()
