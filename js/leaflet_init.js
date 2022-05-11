/*
        Initialize the map
        by setting leaflet's map object etc.
*/
var map = L.map('map').setView([0, 0], 0);
var marker = L.marker([0, 0]).addTo(map);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, {attribution});
tiles.addTo(map);
const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544';


function pointToLocation(lat, lon) {
    /*
            Set the map pointer & map view to the given lat/lon
    */
    marker.setLatLng([lat, lon]);
	map.setView([lat, lon], 18);
}