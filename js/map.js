
let map = L.map('map').setView([48.857192541898684, 2.3127917306828696], 10);

let OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let position1 = L.circleMarker([48.857192541898684, 2.3127917306828696], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

position1.bindPopup("<h2>INVALIDES</h2><p>épreuve:</p><p>tir à l'arc</p><img class='img-map' src='img/olypic_berlin.jpg'><a href='https://www.google.com/maps/place/H%C3%B4tel+des+Invalides/@48.856529,2.3127059,15z/data=!4m5!3m4!1s0x0:0x455a14459c80c16a!8m2!3d48.856529!4d2.3127059?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position2 = L.circleMarker([48.865809521962206, 2.321407358980838], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position2.bindPopup("<h2>LA CONCORDE</h2><p>épreuve:</p><p>Basketball 3×3 <br> BMX freestyle <br> Breaking <br> Skateboard</p><img class='img-map' src='img/concorde.jpg'><a href='https://www.google.com/maps/place/Place+de+la+Concorde/@48.8656366,2.319047,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fcd61ae0a01:0x18030de10e25ab2c!8m2!3d48.8656331!4d2.3212357?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position3 = L.circleMarker([48.86631375078501, 2.31241148227368], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position3.bindPopup("<h2>GRANDS PALAIS</h2><p>épreuve:</p><p>Escrime <br> Taekwondo</p><img class='img-map' src='img/grand-palais.jpg'><a href='https://www.google.com/maps/place/Grand+Palais/@48.8661126,2.3102657,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fd048eedcd1:0x499b45575147a06b!8m2!3d48.8661091!4d2.3124544?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});


let position4 = L.circleMarker([48.86007309337404, 2.292071712956316], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position4.bindPopup("<h2>PONT D'IÉNA</h2><p>épreuve:</p><p>Triathlon <br> Cyclisme sur route <br> Athlétisme <br> Natation en eau libre</p><img class='img-map' src='img/pont-iena.jpg'><a href='https://www.google.com/maps/place/Pont+d'Iéna/@48.8598578,2.2898401,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fe3ad43f65b:0xe6cc2c00d7edf7ac!8m2!3d48.8598523!4d2.292026?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position5 = L.circleMarker([48.85852537140791, 2.2944920264501927], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position5.bindPopup("<h2>TOUR EIFFEL</h2><p>épreuve:</p><p>Volleyball de plage</p><img class='img-map' src='img/paris.jpg'><a href='https://www.google.com/maps/place/48%C2%B051'23.0%22N+2%C2%B017'51.7%22E/@48.8563898,2.2971472,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x23fe29211c91bad3!8m2!3d48.8563859!4d2.2976814?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position6 = L.circleMarker([48.85638591591648, 2.297681448911241], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position6.bindPopup("<h2>ARENA CHAMPS DE MARS</h2><p>épreuve:</p><p>Judo <br> Lutte</p><img class='img-map' src='img/champs-de-mars.jpg'><a href='https://www.google.com/maps/place/Champ+de+Mars/@48.855651,2.2964417,17z/data=!3m1!4b1!4m5!3m4!1s0x47e670209c1c4807:0x9702c4c43d00821e!8m2!3d48.8556475!4d2.2986304?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position7 = L.circleMarker([48.84615313076483, 2.2534451380961027], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position7.bindPopup("<h2>STADE ROLAND GARROS</h2><p>épreuve:</p><p>Tennis <br> Boxe</p><img class='img-map' src='img/rollad-garros.jpg'><a href='https://www.google.com/maps/place/Stade+Roland+Garros,+Court+Simonne+Mathieu,+2+Av.+Gordon+Bennett,+75016+Paris/@48.8459872,2.251353,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67ac786411f5f:0x4996a7bd2697a811!8m2!3d48.8459837!4d2.2535417?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position8 = L.circleMarker([48.84152737391201, 2.253113070626292], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position8.bindPopup("<h2>PARC DES PRINCES</h2><p>épreuve:</p><p>Football</p><img class='img-map' src='img/parc-des-princes.jpg'><a href='https://www.google.com/maps/place/Le+Parc+des+Princes/@48.8414391,2.25086,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67ac09948a18d:0xdd2450406cef2c5c!8m2!3d48.8414356!4d2.2530487?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position9 = L.circleMarker([48.83142317750072, 2.290193206807531 ], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position9.bindPopup("<h2>ARENA PARIS SUD 1, 2, 3</h2><p>épreuve:</p><p>Volleyball <br> Tennis de table <br> Haltérophilie</p><img class='img-map' src='img/porte-versaille.jpg'><a href='https://www.google.com/maps/place/Paris+Expo+Porte+de+Versailles/@48.8300389,2.2729412,14z/data=!4m9!1m2!2m1!1sparis+expo!3m5!1s0x47e6707227dc3507:0xb95e16217b96a221!8m2!3d48.8300389!4d2.2904507!15sCgpwYXJpcyBleHBvWgwiCnBhcmlzIGV4cG-SARFjb252ZW50aW9uX2NlbnRlcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSQk5tWlhZMWxSRUFF?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});


let position10 = L.circleMarker([48.83869361092151, 2.378851379950462], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position10.bindPopup("<h2>ARENA PARIS BERCY</h2><p>épreuve:</p><p>Basketball <br> Gymnastique artistique <br> Trampoline</p><img class='img-map' src='img/paris-arena.jpg'><a href='https://www.google.com/maps/place/AccorHotels+Arena/@48.8385414,2.3763955,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6721743fa0af9:0x989bfc2771543869!8m2!3d48.8385379!4d2.3785842?hl=fr' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position11 = L.circleMarker([48.860608098369646, 2.63726878060695], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position11.bindPopup("<h2>STADE NAUTIQUE DE VAIRES-SUR-MARNE</h2><p>épreuve:</p><p>Canoë <br> Aviron </p><img class='img-map' src='img/vaire-torcy.jpg'><a href='https://www.google.fr/maps/place/Stade+Nautique+Olympique+d'%C3%8Ele-de-France/@48.8603987,2.6331754,16z/data=!4m9!1m2!2m1!1sNAUTIQUE+DE+VAIRES-SUR-MARN!3m5!1s0x47e61009d545f13b:0xf875f3e5c1890639!8m2!3d48.8603987!4d2.6373712!15sChtOQVVUSVFVRSBERSBWQUlSRVMtU1VSLU1BUk5aHSIbbmF1dGlxdWUgZGUgdmFpcmVzIHN1ciBtYXJukgEOc3BvcnRzX2NvbXBsZXiaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkxPSEJJZUVSM0VBRQ' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position12 = L.circleMarker([48.80503446985456, 2.120323211106637], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position12.bindPopup("<h2>CHÂTEAU DE VERSAILLES</h2><p>épreuve:</p><p>Sports équestres<br> Pentathlon moderne </p><img class='img-map' src='img/versailles.jpg'><a href='https://www.google.fr/maps/place/Ch%C3%A2teau+de+Versailles/@48.8048684,2.1181667,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67d94d7b14c75:0x538fcc15f59ce8f!8m2!3d48.8048649!4d2.1203554' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position13 = L.circleMarker([48.80503446985456, 2.120323211106637], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position13.bindPopup("<h2>Colline d'Élancourt</h2><p>épreuve:</p><p>VTT</p><img class='img-map' src='img/vaire-torcy.jpg'><a href='https://www.google.com/maps/place/Colline+d'%C3%89lancourt/@48.7893924,1.9623911,15z/data=!4m5!3m4!1s0x47e6847a2fb874df:0xbe99577b569055ee!8m2!3d48.788333!4d1.968056' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position14 = L.circleMarker([48.78823593858468, 2.0348119111059804], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position14.bindPopup("<h2>Vélodrome National de Saint-Quentin-en-Yvelines</h2><p>épreuve:</p><p>Cyclisme sur piste<br>Pentathlon moderne</p><img class='img-map' src='img/vaire-torcy.jpg'><a href='https://www.google.com/maps/place/V%C3%A9lodrome+National+de+Saint-Quentin-en-Yvelines/@48.7880274,2.0326554,17z/data=!3m1!4b1!4m5!3m4!1s0x47e686ce315ad83d:0xed667b0970abf483!8m2!3d48.7880239!4d2.0348441' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position15 = L.circleMarker([48.78607996058195, 2.0339536042338295], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position15.bindPopup("<h2>STADE BMX DE SAINT-QUENTIN-EN-YVELINES</h2><p>épreuve:</p><p>BMX race</p><img class='img-map' src='img/vaire-torcy.jpg'><a href='https://www.google.com/maps/place/V%C3%A9lodrome+National+de+Saint-Quentin-en-Yvelines/@48.7880274,2.0326554,17z/data=!3m1!4b1!4m5!3m4!1s0x47e686ce315ad83d:0xed667b0970abf483!8m2!3d48.7880239!4d2.0348441' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position16 = L.circleMarker([48.75476056642843, 2.07614502644607], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position16.bindPopup("<h2>GOLF NATIONAL</h2><p>épreuve:</p><p>Golf</p><img class='img-map' src='img/golf.jpg'><a href='https://www.google.com/maps/place/V%C3%A9lodrome+National+de+Saint-Quentin-en-Yvelines/@48.7880274,2.0326554,17z/data=!3m1!4b1!4m5!3m4!1s0x47e686ce315ad83d:0xed667b0970abf483!8m2!3d48.7880239!4d2.0348441' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position17 = L.circleMarker([48.8952927501999, 2.2293242246041065], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position17.bindPopup("<h2>ARENA LA DÉFENSE</h2><p>épreuve:</p><p>Natation <br> Water-polo</p><img class='img-map' src='img/uArena.jpg'><a href='https://www.google.com/maps/place/Paris+La+D%C3%A9fense+Arena/@48.8951552,2.2271999,17z/data=!3m1!4b1!4m5!3m4!1s0x47e664f93278928d:0xc749b6b4e73d3630!8m2!3d48.8951517!4d2.2293886' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position18 = L.circleMarker([48.92940395643835, 2.2477609687822593], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position18.bindPopup("<h2>STADE YVES-DU-MANOIR</h2><p>épreuve:</p><p>Hockey</p><img class='img-map' src='img/vaire-torcy.jpg'><a href='https://www.google.com/maps/place/Stade+Olympique+Yves+du+Manoir/@48.9292806,2.245583,17z/data=!3m1!4b1!4m5!3m4!1s0x47e665da9e08e561:0x65455f9e577c366!8m2!3d48.9292771!4d2.2477717' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position19 = L.circleMarker([48.9297140244535, 2.355916083826989], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position19.bindPopup("<h2>CENTRE AQUATIQUE</h2><p>épreuve:</p><p>Hockey</p><img class='img-map' src='img/vaire-torcy.jpg'><a href='https://www.google.com/maps/place/Piscine+olympique+de+Saint-Denis/@48.9268945,2.3219271,12z/data=!4m9!1m2!2m1!1scentre+aquatique+%C3%A0+proximit%C3%A9+de+93!3m5!1s0x47e66f7b387e0ff9:0xbee6a9266c40b885!8m2!3d48.9239527!4d2.3559917!15sCiRjZW50cmUgYXF1YXRpcXVlIMOgIHByb3hpbWl0w6kgZGUgOTOSAQ5hcXVhdGljX2NlbnRlcg' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position20 = L.circleMarker([48.9297140244535, 2.355916083826989], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position20.bindPopup("<h2>STADE DE FRANCE</h2><p>épreuve:</p><p>Athlétisme <br> Rugby</p><img class='img-map' src='img/stade.jpg'><a href='https://www.google.com/maps/place/Stade+de+France/@48.9244627,2.3579758,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66ebadd2263bf:0x70c04f7109156311!8m2!3d48.9244592!4d2.3601645' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});

let position21 = L.circleMarker([48.93482803051263, 2.382488526453183], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
})
.addTo(map)
position21.bindPopup("<h2>STAND DE TIR DE LA COURNEUVE</h2><p>épreuve:</p><p>Tir</p><img class='img-map' src='img/vaire-torcy.jpg'><a class='a-map' href='https://www.google.com/maps/place/Stand+de+tir+de+La+courneuve/@48.9346624,2.3802891,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66c07a255d9d1:0xad36902796b63f21!8m2!3d48.9346589!4d2.3824778' target=”_blank” >itinéraire</a>",{
    maxWidth : 200
});