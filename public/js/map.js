// let mapToken = mapToken;
//mapboxgl.accessToken = mapToken;
 
//mapboxgl.accessToken = mapToken;
 //const map = new mapboxgl.Map({
 // container: 'map',
 // style:'mapbox://styles/mapbox/dark-v12',
 // center: listing.geometry.coordinates,
 // zoom:9
 //});

//const marker = new mapboxgl.Marker({Color: "red"})
//.setLngLat(coordinates)
//.setPopup(new mapboxgl.Popup({offset: 25})
//,setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>` ))
//.addTo(map);


//use this as reference // let mapToken = mapToken;
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9 // starting zoom
});

console.log(listing.geometry.coordinates);


const marker = new mapboxgl.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({offset:25}).setHTML(
      `<h5>${listing.title}</h5><p>Exact location will be provided after booking</p>`
    )
  )
  .addTo(map);
