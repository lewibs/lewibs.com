import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './functions';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

//ABOUT ME CODE
$('document').ready($(window).bind("resize", function () { $('#aboutMe img').height($('#aboutMe h1').outerHeight(true) + $('#aboutMe h4').outerHeight(true) + $('#aboutMe .about').outerHeight(true) + $('#aboutMe .resume').outerHeight(true)) }));

//PROJECT CODE
$('.project').hover(
    function () {
        $(this).find('.info, h3, hr').fadeToggle(200);
        $(this).find('article').delay(200).slideToggle(300);
        $(this).find('.buttons').delay(400).slideDown(200);
    },
    function () {
        $(this).find('.info, h3, hr').delay(400).fadeToggle(200);
        $(this).find('article').delay(200).slideToggle(300);
        $(this).find('.buttons').slideUp(200);
    });
