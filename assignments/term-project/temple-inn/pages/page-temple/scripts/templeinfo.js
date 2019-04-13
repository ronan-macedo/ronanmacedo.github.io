var templeApi = 'json/templedata.json';
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', templeApi, true);
templeRequest.responseType = 'json';
templeRequest.send()

templeRequest.onload = function () {
    var templeInfo = templeRequest.response;
    /* JSON information */
    console.log(templeInfo);
    /* campinas data */
    document.getElementById('campname').innerHTML = templeInfo.temples[0].location
    document.getElementById('campad').innerHTML = templeInfo.temples[0].address;
    document.getElementById('camps1').innerHTML = templeInfo.temples[0].services[0];
    document.getElementById('camps2').innerHTML = templeInfo.temples[0].services[1];
    document.getElementById('camps3').innerHTML = templeInfo.temples[0].services[2];
    document.getElementById('camps4').innerHTML = templeInfo.temples[0].services[3];
    document.getElementById('camph1').innerHTML = templeInfo.temples[0].history[0];
    document.getElementById('camph2').innerHTML = templeInfo.temples[0].history[1];
    document.getElementById('camph3').innerHTML = templeInfo.temples[0].history[2];
    document.getElementById('campc1').innerHTML = templeInfo.temples[0].closure[0];
    document.getElementById('campc2').innerHTML = templeInfo.temples[0].closure[1];
    document.getElementById('campc3').innerHTML = templeInfo.temples[0].closure[2];
    document.getElementById('campc4').innerHTML = templeInfo.temples[0].closure[3];
    document.getElementById('campc5').innerHTML = templeInfo.temples[0].closure[4];
    document.getElementById('campc6').innerHTML = templeInfo.temples[0].closure[5];
    /* são paulo data */
    document.getElementById('spname').innerHTML = templeInfo.temples[1].location
    document.getElementById('spad').innerHTML = templeInfo.temples[1].address;
    document.getElementById('sps1').innerHTML = templeInfo.temples[1].services[0];
    document.getElementById('sps2').innerHTML = templeInfo.temples[1].services[1];
    document.getElementById('sps3').innerHTML = templeInfo.temples[1].services[2];
    document.getElementById('sps4').innerHTML = templeInfo.temples[1].services[3];
    document.getElementById('sph1').innerHTML = templeInfo.temples[1].history[0];
    document.getElementById('sph2').innerHTML = templeInfo.temples[1].history[1];
    document.getElementById('sph3').innerHTML = templeInfo.temples[1].history[2];
    document.getElementById('sph4').innerHTML = templeInfo.temples[1].history[3];
    document.getElementById('spc1').innerHTML = templeInfo.temples[1].closure[0];
    document.getElementById('spc2').innerHTML = templeInfo.temples[1].closure[1];
    document.getElementById('spc3').innerHTML = templeInfo.temples[1].closure[2];
    document.getElementById('spc4').innerHTML = templeInfo.temples[1].closure[3];
    document.getElementById('spc5').innerHTML = templeInfo.temples[1].closure[4];
    /* curitiba data */
    document.getElementById('curname').innerHTML = templeInfo.temples[2].location
    document.getElementById('curad').innerHTML = templeInfo.temples[2].address;
    document.getElementById('curs1').innerHTML = templeInfo.temples[2].services[0];
    document.getElementById('curs2').innerHTML = templeInfo.temples[2].services[1];
    document.getElementById('curs3').innerHTML = templeInfo.temples[2].services[2];
    document.getElementById('curs4').innerHTML = templeInfo.temples[2].services[3];
    document.getElementById('curh1').innerHTML = templeInfo.temples[2].history[0];
    document.getElementById('curh2').innerHTML = templeInfo.temples[2].history[1];
    document.getElementById('curh3').innerHTML = templeInfo.temples[2].history[2];
    document.getElementById('curc1').innerHTML = templeInfo.temples[2].closure[0];
    document.getElementById('curc2').innerHTML = templeInfo.temples[2].closure[1];
    document.getElementById('curc3').innerHTML = templeInfo.temples[2].closure[2];
    document.getElementById('curc4').innerHTML = templeInfo.temples[2].closure[3];
    document.getElementById('curc5').innerHTML = templeInfo.temples[2].closure[4];
    document.getElementById('curc6').innerHTML = templeInfo.temples[2].closure[5];
    /* manaus data */
    document.getElementById('manname').innerHTML = templeInfo.temples[3].location
    document.getElementById('manad').innerHTML = templeInfo.temples[3].address;
    document.getElementById('mans1').innerHTML = templeInfo.temples[3].services[0];
    document.getElementById('mans2').innerHTML = templeInfo.temples[3].services[1];
    document.getElementById('mans3').innerHTML = templeInfo.temples[3].services[2];
    document.getElementById('mans4').innerHTML = templeInfo.temples[3].services[3];
    document.getElementById('manh1').innerHTML = templeInfo.temples[3].history[0];
    document.getElementById('manh2').innerHTML = templeInfo.temples[3].history[1];
    document.getElementById('manh3').innerHTML = templeInfo.temples[3].history[2];
    document.getElementById('manc1').innerHTML = templeInfo.temples[3].closure[0];
    document.getElementById('manc2').innerHTML = templeInfo.temples[3].closure[1];
    document.getElementById('manc3').innerHTML = templeInfo.temples[3].closure[2];
    document.getElementById('manc4').innerHTML = templeInfo.temples[3].closure[3];
    document.getElementById('manc5').innerHTML = templeInfo.temples[3].closure[4];
}