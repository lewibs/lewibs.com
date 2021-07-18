import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './functions';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

$('document').ready($(window).bind("resize", function () { $('#aboutMe img').height($('#aboutMe h1').outerHeight(true) + $('#aboutMe h4').outerHeight(true) + $('#aboutMe .about').outerHeight(true) + $('#aboutMe .resume').outerHeight(true)) }));