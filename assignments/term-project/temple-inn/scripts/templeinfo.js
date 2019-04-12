var templeRequest = new XMLHttpRequest;
var templeData = '../json/templedata.json';
templeRequest.open('GET', templeData, true);
templeRequest.responseType = 'json';
templeRequest.send()

templeRequest.onload = function () {
    var templeInfo = templeRequest.response;
    /* JSON information */
    console.log(templeInfo);
    /* campinas data */

    /* são paulo data */

    /* curitiba data */ 

    /* manaus data */
}