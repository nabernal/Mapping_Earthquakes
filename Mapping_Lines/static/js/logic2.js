// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Add coordinates for LAX and SFO Airports to the polyline
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the like red
L.polyline(line, {
    color: "yellow"
}).addTo(map)

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);