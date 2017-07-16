$(document).ready(function(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
latitude = position.coords.latitude;
longitude = position.coords.longitude;
var api = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude+"";
$.getJSON(api, function(wdat) {
var weather = wdat.weather[0].main;
var description = wdat.weather[0].description;
var icon = wdat.weather[0].icon;
var windSpeed = wdat.wind.speed;
var windDir = wdat.wind.deg;
var celsius = wdat.main.temp;
var fahrenheit = Math.round(celsius * 9 / 5 + 32);
$('#icon').html('<img src="'+icon+'">');
$('#temp').html(''+fahrenheit+'&#8457;');
$('#description').html(description);
});
    });
} else {
    alert("Geolocation is not enabled on this device")
}

});