var templeRequest = new XMLHttpRequest();
var templeData = '../json/templedata.json';
templeRequest.open('GET', templeData, true);
templeRequest.send()

templeRequest.onload = function () {
    var templeInfo = JSON.parse(templeRequest.responseText);
    /* JSON information */
    console.log(templeInfo);
    /* campinas data */

    /* são paulo data */

    /* curitiba data */ 

    /* manaus data */
}