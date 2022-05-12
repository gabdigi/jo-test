
let map = L.map('map').setView([48.857192541898684, 2.3127917306828696], 5);

let OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let position22 = L.circleMarker([50.612126692141025, 3.131219460661407], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position22.bindPopup("<h2>STADE PIERRE MAUROY</h2><p>épreuve:</p><p>Handball</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Stade+Pierre+Mauroy/@50.6119667,3.1283012,17z/data=!4m12!1m6!3m5!1s0x47c2d6467a158d69:0x111d6a3b1cf4201a!2sStade+Pierre+Mauroy!8m2!3d50.6119667!4d3.1304899!3m4!1s0x47c2d6467a158d69:0x111d6a3b1cf4201a!8m2!3d50.6119667!4d3.1304899' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position23 = L.circleMarker([47.256139789654725, -1.524664273612075], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position23.bindPopup("<h2>STADE DE NANTES</h2><p>épreuve:</p><p>Football</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Stade+de+la+Beaujoire/@47.2560269,-1.5268637,17z/data=!4m12!1m6!3m5!1s0x4805ee49b39eb7a5:0x147532f48e591254!2sStade+de+la+Beaujoire!8m2!3d47.2560233!4d-1.524675!3m4!1s0x4805ee49b39eb7a5:0x147532f48e591254!8m2!3d47.2560233!4d-1.524675' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position24 = L.circleMarker([44.897502308454165, -0.5615246187052293], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position24.bindPopup("<h2>STADE DE BORDEAUX</h2><p>épreuve:</p><p>Handball</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Matmut+Atlantique/@44.8977683,-0.5644757,17.5z/data=!4m5!3m4!1s0xd5529085c00e041:0xe9a61444765a6d7e!8m2!3d44.8973583!4d-0.5615863' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position25 = L.circleMarker([43.29311159636488, 5.3699042109004145], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position25.bindPopup("<h2>MARINA DE MARSEILLE</h2><p>épreuve:</p><p>Voile</p><img class='img-map' src='img/Marseille.jpg'><a href='https://www.google.com/maps/place/Marseille/@43.292941,5.3677914,17z/data=!4m9!1m2!2m1!1smarina+de+marseille!3m5!1s0x12c9c1a327646bc1:0x9ee78fc94070d46!8m2!3d43.292941!4d5.3699801!15sChNtYXJpbmEgZGUgbWFyc2VpbGxlkgEGbWFyaW5h' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position26 = L.circleMarker([43.270006655525044, 5.395887297405669], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position26.bindPopup("<h2>STADE DE MARSEILLE</h2><p>épreuve:</p><p>Football</p><img class='img-map' src='img/Marseille.jpg'><a href='https://www.google.com/maps/place/Orange+V%C3%A9lodrome/@43.2698309,5.3936986,17z/data=!3m1!4b1!4m5!3m4!1s0x12c9b8a778a71c19:0xf30ae56cc3f4dc1e!8m2!3d43.269827!4d5.3958873' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position27 = L.circleMarker([43.70531058902637, 7.19268459926865], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position27.bindPopup("<h2>STADE DE NICE</h2><p>épreuve:</p><p>Football</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Allianz+Riviera/@43.7051051,7.1904208,17z/data=!4m12!1m6!3m5!1s0x12cdd1ef37a975c5:0xe5a00153b844e8d3!2sAllianz+Riviera!8m2!3d43.7051012!4d7.1926095!3m4!1s0x12cdd1ef37a975c5:0xe5a00153b844e8d3!8m2!3d43.7051012!4d7.1926095' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position28 = L.circleMarker([45.4609990339854, 4.390118910978937], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position28.bindPopup("<h2>STADE DE SAINT-ETIENNE</h2><p>épreuve:</p><p>Football</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Stade+Geoffroy+Guichard/@45.460777,4.3879624,17z/data=!4m12!1m6!3m5!1s0x47f5ac72b5162507:0x8082a74595924a0a!2sStade+Geoffroy+Guichard!8m2!3d45.4607733!4d4.3901511!3m4!1s0x47f5ac72b5162507:0x8082a74595924a0a!8m2!3d45.4607733!4d4.3901511' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position29 = L.circleMarker([45.76545215186605, 4.982082641673074], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position29.bindPopup("<h2>STADE DE LYON</h2><p>épreuve:</p><p>Football</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Groupama+Stadium/@45.7652987,4.9798403,17z/data=!4m5!3m4!1s0x47f4c7221ed6efa5:0x2f897dd844dfd2c2!8m2!3d45.765295!4d4.982029' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position30 = L.circleMarker([-17.84420559960035, -149.2681345210099], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position30.bindPopup("<h2>Tahiti teahupoo</h2><p>épreuve:</p><p>Surf</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Teahupoo,+Taiarapu-Ouest,+Polyn%C3%A9sie+fran%C3%A7aise/@-17.8402022,-149.251655,13z/data=!3m1!4b1!4m9!1m2!2m1!1stahiti+teahupoo+olympique!3m5!1s0x769ba5428430b0c9:0x44b5d6be24801a32!8m2!3d-17.847081!4d-149.2677104!15sChl0YWhpdGkgdGVhaHVwb28gb2x5bXBpcXVlkgEMc3VibG9jYWxpdHkx' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});