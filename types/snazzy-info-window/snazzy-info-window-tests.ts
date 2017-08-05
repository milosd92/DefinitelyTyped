import SnazzyInfoWindow = require('snazzy-info-window');
import jQuery = require('jquery');

const simple = () => {
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
};

// Multiple markers

const multipleMarkers = () => {
    let mapCenter = { lat: 40.72, lng: -74 };
    let myMap = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        center: mapCenter
    });

    const offsetCenter = (dx: number, dy: number) => {
        return { lat: mapCenter.lat + dx, lng: mapCenter.lng + dy };
    };

    let dx = 0.003;
    let placements: [{ type: SnazzyInfoWindow.PlacementOptions, LatLng: { lat: number, lng: number } }] = [
        { type: 'top', LatLng: offsetCenter(dx, 0) },
        { type: 'right', LatLng: offsetCenter(0, dx) },
        { type: 'bottom', LatLng: offsetCenter(-dx, 0) },
        { type: 'left', LatLng: offsetCenter(0, -dx) }
    ];

    $.each(placements, (i, e) => {
        let myMarker = new google.maps.Marker({
            map: myMap,
            draggable: true,
            position: e.LatLng
        });

        let a = e.type;
        let info = new SnazzyInfoWindow({
            marker: myMarker,
            placement: e.type,
            content: e.type,
            panOnOpen: false,
        });
        info.open();
    });
};

// let infoWindow = new SnazzyInfoWindow({
//     marker: new google.maps.Marker(),
//     callbacks: {
//         beforeOpen() {
//             return false;
//         }
//     }
// });
