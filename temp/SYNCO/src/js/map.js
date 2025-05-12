// Initialize the leaflet map
const map = L.map("map", {
  scrollWheelZoom: false,
  touchZoom: "center", // Require two fingers for zooming and disable single-finger panning
});

// Get the tile layer from OpenStreetMaps
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // Specify the maximum zoom of the map
  maxZoom: 19,

  // Set the attribution for OpenStreetMaps
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.setView([37.9562070857867, 23.756484590372605], 15);
map.attributionControl.setPrefix("Leaflet");
let syncomarker = L.marker([37.9562070857867, 23.756484590372605]).addTo(map);

// Bind popup to the marker with a popup
syncomarker.bindPopup("SYNCO Athens Experts").openPopup();

// Attach key events only to the map container for better behavior
const mapContainer = document.getElementById("map");

// Enable scroll zoom when Shift is pressed
mapContainer.addEventListener("mouseenter", () => {
  document.addEventListener("keydown", enableScrollZoom);
  document.addEventListener("keyup", disableScrollZoom);
});

// Clean up events when leaving the map
mapContainer.addEventListener("mouseleave", () => {
  document.removeEventListener("keydown", enableScrollZoom);
  document.removeEventListener("keyup", disableScrollZoom);
});

// Function to enable scroll zoom
function enableScrollZoom(e) {
  if (e.key === "Shift") {
    map.scrollWheelZoom.enable();
  }
}

// Function to disable scroll zoom
function disableScrollZoom(e) {
  if (e.key === "Shift") {
    map.scrollWheelZoom.disable();
  }
}
