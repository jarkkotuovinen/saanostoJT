$.ajax({
    url: "http://www.iltalehti.fi/cgi/demo/data.cgi",
    dataType: 'jsonp',
    success: function(data){

function showDiv1() {

    var lampoHKI;
    var aikaHKI = new Date().getHours(); 
    var kelloHKI;
    var taivasHKI;

    if (8 <= aikaHKI && aikaHKI < 15 ) 
    {
        kelloHKI = data.helsinki[1].time;
        taivasHKI = data.helsinki[1].sky;
        lampoHKI = data.helsinki[1].temperature;
    } 
    else if ( 15 <= aikaHKI && aikaHKI < 20 ) {
        kelloHKI = data.helsinki[2].time;
        taivasHKI = data.helsinki[2].sky;
        lampoHKI = data.helsinki[2].temperature;
    }
        else
    {
        kelloHKI = data.helsinki[0].time;
        taivasHKI = data.helsinki[0].sky;
        lampoHKI = data.helsinki[0].temperature;
    }
    $('#saatanaan').show();

    setTimeout(function(){ $('#saatanaan').hide(); showDiv2(); },3000);
    document.getElementById("lampoHKI").innerHTML = lampoHKI + "°";
    document.getElementById("kelloHKI").innerHTML = kelloHKI;

    if (taivasHKI == "cloudy") {
        document.getElementById("saalogo").style.backgroundImage="url(cloudy.png)";
    }
    else if (taivasHKI == "partly cloudy") {
        document.getElementById("saalogo").style.backgroundImage="url(partly_cloudy.png)";
    }
    else if (taivasHKI == "sunny") {
        document.getElementById("saalogo").style.backgroundImage="url(sunny.png)";
    }
  
    if (lampoHKI < 5){
    document.getElementById("kansi").style.backgroundColor="#0000FF";
    }
    else {
    document.getElementById("kansi").style.backgroundColor="#ff7000";
    }
}

function showDiv2() {
    var lampoOulu;
    var aikaOulu = new Date().getHours(); 
    var kelloOulu;
    var taivasOulu;
    if (8 <= aikaOulu && aikaOulu < 15 ) 
    {
        kelloOulu = data.oulu[1].time;
        taivasOulu = data.oulu[1].sky;
        lampoOulu = data.oulu[1].temperature;
    }
    else if ( 15 <= aikaOulu && aikaOulu < 20 ) 
    {
        kelloOulu = data.oulu[2].time;
        taivasOulu = data.oulu[2].sky;
        lampoOulu = data.oulu[2].temperature;
    } 
    else {
        kelloOulu = data.oulu[0].time;
        taivasOulu = data.oulu[0].sky;
        lampoOulu = data.oulu[0].temperature;
    }
    $('#saatanaan2').show();

    setTimeout(function(){ $('#saatanaan2').hide(); showDiv3(); },3000);
    document.getElementById("lampoOulu").innerHTML = lampoOulu + "°";
    document.getElementById("kelloOulu").innerHTML = kelloOulu;

    if (taivasOulu =="cloudy") {
    document.getElementById("saalogo").style.backgroundImage="url(cloudy.png)";
    }
    else if (taivasOulu =="partly cloudy") {
    document.getElementById("saalogo").style.backgroundImage="url(partly_cloudy.png)";
    }
    else if (taivasOulu =="sunny") {
    document.getElementById("saalogo").style.backgroundImage="url(sunny.png)";
    }

    if (lampoOulu < 5){
    document.getElementById("kansi").style.backgroundColor="#0000FF";
    }
    else {
    document.getElementById("kansi").style.backgroundColor="#ff7000";
    }

}

function showDiv3() {
    var lampoTRE;
    var aikaTRE = new Date().getHours(); 
    var kelloTRE;
    var taivasTRE;
    if (8 <= aikaTRE && aikaTRE < 15 ) 
    {
        kelloTRE = data.tampere[1].time;
        taivasTRE = data.tampere[1].sky;
        lampoTRE = data.tampere[1].temperature;
    }
    else if ( 15 <= aikaTRE && aikaTRE < 20 ) 
    {
        kelloTRE = data.tampere[2].time;
        taivasTRE = data.tampere[2].sky;
        lampoTRE = data.tampere[2].temperature;
    } 
    else {
        kelloTRE = data.tampere[0].time;
        taivasTRE = data.tampere[0].sky;
        lampoTRE = data.tampere[0].temperature;
    }
    $('#saatanaan3').show();

    setTimeout(function(){ $('#saatanaan3').hide(); showDiv1(); },3000);
    document.getElementById("lampoTRE").innerHTML = lampoTRE + "°";
    document.getElementById("kelloTRE").innerHTML = kelloTRE;


       if (taivasTRE =="cloudy") {
    document.getElementById("saalogo").style.backgroundImage="url(cloudy.png)"; 
    }
        else if (taivasTRE =="partly cloudy") {
     document.getElementById("saalogo").style.backgroundImage="url(partly_cloudy.png)";
    }
    else if (taivasTRE =="sunny") {
     document.getElementById("saalogo").style.backgroundImage="url(sunny.png)";

    }
        if (lampoTRE < 5){
    document.getElementById("kansi").style.backgroundColor="#0000FF";
    }
        else {
    document.getElementById("kansi").style.backgroundColor="#ff7000";
        }

}

$( document ).ready(function() {
        showDiv1();
    });
}
});
