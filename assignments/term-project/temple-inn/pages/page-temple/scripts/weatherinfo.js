var weatherRequest = new XMLHttpRequest();
var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=3448439&appid=b4949c9e08a60e52195a9d346a24fedc&units=imperial';
weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    /* json information */
    console.log(weatherInfo);
    /* placing the data in the weather summary */
    document.getElementById('spcond').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('sptemp').innerHTML = weatherInfo.main.temp.toFixed(0);
    document.getElementById('sphum').innerHTML = weatherInfo.main.humidity;
    document.getElementById('spspeed').innerHTML = weatherInfo.wind.speed.toFixed(0);
    /* wind chill variables */
    var t = parseInt(weatherInfo.main.temp);
    var s = parseInt(weatherInfo.wind.speed);
    /* wind chill formula */
    var result = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + .4275 * t * Math.pow(s, 0.16);
    /* output the wind chill value */
    document.getElementById('spwindchill').innerHTML = result.toFixed(0);
}

var weatherRequest2 = new XMLHttpRequest();
var weatherURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=3467865&appid=b4949c9e08a60e52195a9d346a24fedc&units=imperial';
weatherRequest2.open('GET', weatherURL2, true);
weatherRequest2.send();

weatherRequest2.onload = function() {
    var weatherInfo = JSON.parse(weatherRequest2.responseText);
    /* json information */
    console.log(weatherInfo);
    /* placing the data in the weather summary */
    document.getElementById('campcond').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('camptemp').innerHTML = weatherInfo.main.temp.toFixed(0);
    document.getElementById('camphum').innerHTML = weatherInfo.main.humidity;
    document.getElementById('campspeed').innerHTML = weatherInfo.wind.speed.toFixed(0);
    /* wind chill variables */
    var t = parseInt(weatherInfo.main.temp);
    var s = parseInt(weatherInfo.wind.speed);
    /* wind chill formula */
    var result = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + .4275 * t * Math.pow(s, 0.16);
    /* output the wind chill value */
    document.getElementById('campwindchill').innerHTML = result.toFixed(0);
}

var weatherRequest3 = new XMLHttpRequest();
var weatherURL3 = 'https://api.openweathermap.org/data/2.5/weather?id=6322752&appid=b4949c9e08a60e52195a9d346a24fedc&units=imperial';
weatherRequest3.open('GET', weatherURL3, true);
weatherRequest3.send();

weatherRequest3.onload = function () {
    var weatherInfo = JSON.parse(weatherRequest3.responseText);
    /* json information */
    console.log(weatherInfo);
    /* placing the data in the weather summary */
    document.getElementById('curcond').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('curtemp').innerHTML = weatherInfo.main.temp.toFixed(0);
    document.getElementById('curhum').innerHTML = weatherInfo.main.humidity;
    document.getElementById('curspeed').innerHTML = weatherInfo.wind.speed.toFixed(0);
    /* wind chill variables */
    var t = parseInt(weatherInfo.main.temp);
    var s = parseInt(weatherInfo.wind.speed);
    /* wind chill formula */
    var result = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + .4275 * t * Math.pow(s, 0.16);
    /* output the wind chill value */
    document.getElementById('curwindchill').innerHTML = result.toFixed(0);
}

var weatherRequest4 = new XMLHttpRequest();
var weatherURL4 = 'https://api.openweathermap.org/data/2.5/weather?id=3663517&appid=b4949c9e08a60e52195a9d346a24fedc&units=imperial';
weatherRequest4.open('GET', weatherURL4, true);
weatherRequest4.send();

weatherRequest4.onload = function () {
    var weatherInfo = JSON.parse(weatherRequest4.responseText);
    /* json information */
    console.log(weatherInfo);
    /* placing the data in the weather summary */
    document.getElementById('mancond').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('mantemp').innerHTML = weatherInfo.main.temp.toFixed(0);
    document.getElementById('manhum').innerHTML = weatherInfo.main.humidity;
    document.getElementById('manspeed').innerHTML = weatherInfo.wind.speed.toFixed(0);
    /* wind chill variables */
    var t = parseInt(weatherInfo.main.temp);
    var s = parseInt(weatherInfo.wind.speed);
    /* wind chill formula */
    var result = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + .4275 * t * Math.pow(s, 0.16);
    /* output the wind chill value */
    document.getElementById('manwindchill').innerHTML = result.toFixed(0);
}