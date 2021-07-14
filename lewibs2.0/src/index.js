import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

$('.btn').hover(function () {
							var darkenPercent = 15; // darken color by 15 percent
							var rgb = $(this).css('background-color');
							rgb = rgb.replace('rgb(', '').replace(')', '').split(',');
							var red = $.trim(rgb[0]);
							var green = $.trim(rgb[1]);
							var blue = $.trim(rgb[2]);

							// darken
							red = parseInt(red * (100 - darkenPercent) / 100);
							green = parseInt(green * (100 - darkenPercent) / 100);
							blue = parseInt(blue * (100 - darkenPercent) / 100);
							// lighten
							/* red = parseInt(red * (100 + darkenPercent) / 100);
							green = parseInt(green * (100 + darkenPercent) / 100);
							blue = parseInt(blue * (100 + darkenPercent) / 100); */

							rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

							$(this).css('background-color', rgb);
						});

