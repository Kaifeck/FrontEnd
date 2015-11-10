import $ from 'jquery'
import page from 'page'
import Handlebars from 'hbsfy/runtime'
import * as pages from './pages'
import dateFormat from './helpers/date-format'
import times from 'handlebars-helper-repeat'
import eq from './helpers/eq'

const $nav = $('#nav')

page('*', function(ctx, next) {
  $nav
    .children()
    .removeClass('active')
  $nav
    .find('a[href|="' + ctx.path + '"]')
    .parent()
    .addClass('active')
  next()
})

page('/', '/d3')
page('/de', pages.d3)

page('/error', pages.internalError)
page('*', pages.notFound)

page()
