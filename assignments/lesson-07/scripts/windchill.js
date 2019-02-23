/* windchill document to measure the current windchill in the town */
/*
* t = wind temperature;
* s = wind speed
*/
let t = parseInt(document.getElementById('temp').innerHTML);
let s = parseInt(document.getElementById('speed').innerHTML);

/* calculate the windchill using the formula */ 
let result = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + .4275 * t * Math.pow(s, 0.16);

/* output the value in a span tag in a HTML file with no decimals */
document.getElementById('windchill').innerHTML = result.toFixed(0); 