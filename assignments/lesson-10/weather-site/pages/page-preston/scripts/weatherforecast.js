var weatherForecast = new XMLHttpRequest;
weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d4cc538d72f36351ef3d7787b27c039e&units=imperial', true);
weatherForecast.send();

weatherRequest.onload = function () {
    var forecast = JSON.parse(weatherForecast.responseText);
    /* json information */
    console.log(forecast);
}