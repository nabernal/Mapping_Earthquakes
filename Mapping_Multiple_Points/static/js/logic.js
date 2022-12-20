// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Method 1: Add a marker to the map for Los Angeles, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Method 2: Add a Circle to the Map
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// Method 3: create a circle using the circleMarker() function. 
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
    // format the population with a thousands separator
    // change the marker for each city to a circle that has a radius equivalent to the city's population.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

