
let map = L.map('map').setView([-17.84420559960035, -149.2681345210099], 10);

let OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let position30 = L.circleMarker([-17.84420559960035, -149.2681345210099], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position30.bindPopup("<h2>Tahiti teahupoo</h2><p>épreuve:</p><p>Surf</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Teahupoo,+Taiarapu-Ouest,+Polyn%C3%A9sie+fran%C3%A7aise/@-17.8402022,-149.251655,13z/data=!3m1!4b1!4m9!1m2!2m1!1stahiti+teahupoo+olympique!3m5!1s0x769ba5428430b0c9:0x44b5d6be24801a32!8m2!3d-17.847081!4d-149.2677104!15sChl0YWhpdGkgdGVhaHVwb28gb2x5bXBpcXVlkgEMc3VibG9jYWxpdHkx' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});