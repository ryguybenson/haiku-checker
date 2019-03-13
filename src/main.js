import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import {Haiku} from './haiku.js';

$(document).ready(function() {
  $('#haikuform').submit(function(event) {
    event.preventDefault();
    var first = $('#firstWord').val();
    console.log (first)
    var second = $('#secondWord').val();
    var third = $('#thirdWord').val();

    var haikuOutput = new Haiku(first, second, third);
    console.log(haikuOutput);
  });
});
