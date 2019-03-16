var weatherRequest = new XMLHttpRequest();
var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b4949c9e08a60e52195a9d346a24fedc&units=imperial';
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

var forecastRequest = new XMLHttpRequest();
var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b4949c9e08a60e52195a9d346a24fedc&units=imperial';
forecastRequest.open ('GET', forecastURL, true);
forecastRequest.send();

forecastRequest.onload = function () {
    var forecastInfo = JSON.parse(forecastRequest.responseText);
    /* json information */
    console.log(forecastInfo);
    /* placing the days of the week in the table head */
    var d = new Date();
    /* define the days of the week */
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] = "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    weekday[10] = "Wednesday";
    weekday[11] = "Thursday";
    weekday[12] = "Friday";
    weekday[13] = "Saturday";
    /* create the five day sequence */
    var one = weekday[d.getDay()];
        document.getElementById('day1').innerHTML = one;
    var two = weekday[d.getDay() + 1];
        document.getElementById('day2').innerHTML = two;
    var three = weekday[d.getDay() + 2];
        document.getElementById('day3').innerHTML = three;
    var four = weekday[d.getDay() + 3];
        document.getElementById('day4').innerHTML = four;
    var five = weekday[d.getDay() + 4];
        document.getElementById('day5').innerHTML = five;
    /* placing the data forecast in the table data */
    document.getElementById('fore1').innerHTML = forecastInfo.list[0].main.temp_max.toFixed(0);
    document.getElementById('fore2').innerHTML = forecastInfo.list[8].main.temp_max.toFixed(0);
    document.getElementById('fore3').innerHTML = forecastInfo.list[16].main.temp_max.toFixed(0);
    document.getElementById('fore4').innerHTML = forecastInfo.list[24].main.temp_max.toFixed(0);
    document.getElementById('fore5').innerHTML = forecastInfo.list[32].main.temp_max.toFixed(0);
}
