import SnazzyInfoWindow = require('snazzy-info-window');
import jQuery = require('jquery');

// Simple

let myMap = new google.maps.Map($('.map-canvas')[0], {
    zoom: 14,
    center: new google.maps.LatLng(40.72, -74)
});

let myMarker = new google.maps.Marker({
    map: myMap,
    position: new google.maps.LatLng(40.72, -74)
});

let info = new SnazzyInfoWindow({
    marker: myMarker,
    content: 'Your snazzy content.'
});

info.open();

// let infoWindow = new SnazzyInfoWindow({
//     marker: new google.maps.Marker(),
//     callbacks: {
//         beforeOpen() {
//             return false;
//         }
//     }
// });
