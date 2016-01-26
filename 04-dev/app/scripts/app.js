import $ from 'jquery';
import page from 'page';
import Handlebars from 'hbsfy/runtime';
import * as pages from './pages/main.js';
import dateFormat from './helpers/date-format';

const $nav = $('#nav');

Handlebars.registerHelper('dateFormat', dateFormat);

//Set new active Tab
page('*', function(ctx, next) {
    $nav.children()
        .removeClass('active');

    $nav.find('a[href|="' + ctx.path + '"]')
        .parent()
        .addClass('active');
    next();
});
//If page empty, set to home, so that home will handle
page('/', '/index');
//If home, call home function in page
page('/index', pages.index);
//If constructors, call constructors
page('/constructors', pages.constructors);
//If constructors WITH PARAM, call specific constructor
page('/constructors/:constructor', pages.constructor);
//Same with drivers
page('/drivers', pages.drivers);
page('/drivers/:driver', pages.driver);
//Kinda same with results
page('/results', pages.results);
page('/results/:season/:index', pages.result);
//Same old deal
page('/contact', pages.contact);
//If error, then error
page('/error', pages.internalError);
//If no match, call notFound
page('*', pages.notFound);

page();

