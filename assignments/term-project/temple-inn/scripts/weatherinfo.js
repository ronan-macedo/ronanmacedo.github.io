var weatherRequest = new XMLHttpRequest();
var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=b4949c9e08a60e52195a9d346a24fedc&units=imperial';
weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    /* json information */
    console.log(weatherInfo);
    /* placing the data in the weather icon */
    document.getElementById('current').innerHTML = weatherInfo.weather[0].main;
    var iconCode = weatherInfo.weather[0].icon;
    var iconPath = "https://openweathermap.org/img/w/" + iconCode + ".png";
    document.getElementById('icon').src = iconPath;
    /* placing the data in the weather summary */
    document.getElementById('cond').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('temp').innerHTML = weatherInfo.main.temp.toFixed(0);
    document.getElementById('hum').innerHTML = weatherInfo.main.humidity;
    document.getElementById('speed').innerHTML = weatherInfo.wind.speed.toFixed(0);
    /* wind chill variables */
    var t = parseInt(weatherInfo.main.temp);
    var s = parseInt(weatherInfo.wind.speed);
    /* wind chill formula */
    var result = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + .4275 * t * Math.pow(s, 0.16);
    /* output the wind chill value */
    document.getElementById('windchill').innerHTML = result.toFixed(0);
}
