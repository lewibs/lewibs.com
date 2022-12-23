import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

//ABOUT ME CODE
$(document).ready($(window).bind("resize", function () { $('#aboutMe img').height($('#aboutMe h1').outerHeight(true) + $('#aboutMe h4').outerHeight(true) + $('#aboutMe .about').outerHeight(true) + $('#aboutMe .resume').outerHeight(true)) }));

//PROJECT CODE
$(document).ready(
    function() {
        if($(window).width() > 660) {
            $('.project').hover(
                function () {
                    $(this).find('.info, h3, hr').fadeIn(200);
                    $(this).find('article').delay(200).slideDown(300);
                    $(this).find('.buttons').delay(400).slideDown(200);
                },
                function () {
                    $(this).find('.info, h3, hr').delay(400).fadeOut(200);
                    $(this).find('article').delay(200).slideUp(300);
                    $(this).find('.buttons').slideUp(200);
                });
        } else {
            $('.project').click(
                function () {
                    if ($(this).hasClass('toggle')) {
                        $(this).find('.info, h3, hr').delay(400).fadeOut(200);
                        $(this).find('article').delay(200).slideUp(300);
                        $(this).find('.buttons').slideUp(200);
                        $(this).removeClass('toggle');
                    } else {
                        $(this).find('.info, h3, hr').fadeIn(200);
                        $(this).find('article').delay(200).slideDown(300);
                        $(this).find('.buttons').delay(400).slideDown(200);
                        $(this).addClass('toggle');
                    }
                });
        }
    }
);