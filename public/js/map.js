
mapboxgl.accessToken = mapToken;
 
mapboxgl.accessToken = mapToken;
 const map = new mapboxgl.Map({
  container: 'map',
  style:'mapbox://styles/mapbox/dark-v12',
  center: listing.geometry.coordinates,
  zoom:9
 });

const marker = new mapboxgl.Marker({Color: "red"})
.setLngLat(coordinates)
.setPopup(new mapboxgl.Popup({offset: 25})
,setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>` ))
.addTo(map);
