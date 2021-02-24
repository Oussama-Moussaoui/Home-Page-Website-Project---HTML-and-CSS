let map;

function initMap() {

    const loc = {
        lat: 40.741895,
        lng: -73.989308
    };

    map = new google.maps.Map(document.getElementById("map"), {
        center: loc,
        zoom: 8,
    });

    const marker = new google.maps.Marker({ position: loc, map:map});
}