var locations = [
  {lat: 41.831618, lng -87.627242},
  {lat: 41.835489, lng -87.628293},
  {lat: 41.918026, lng -87.658765},
  {lat: 41.916720, lng -87.657934},
  {lat: 18.490036, lng -77.928277},
  {lat: 18.483171, lng -77.609439}
];

var longNames = [
  'IIT Tower Building',
  'IIT's The Bog',
  'Royal Decameron Montego Beach Resort',
  'Royalton White Sands Resort',
  'PAWS Chicago',
  'PAWS Chicago Training Center',
];

var redshirt = {lat: 41.2227041, lng: -112.0427138};
var map;
var iit = '../images/iit.jpg';
var jamaicaflag = '../images/jamaica/jamaicaflag.jpg';
var catdog = '../images/paws/catdog.jpg';
var markers = [];

function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'), {
    center: redshirt,
    zoom: 6,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  });
  
   clearMarkers();
  for (var i = 0; i < locations.length; i++) {
    addMarkerWithTimeout(locations[i], longNames[i], i * 200);
  }
  
 function addMarkerWithTimeout(position, name, timeout) {
    window.setTimeout(function() {
      if (name === 'IIT Tower Building' || name === 'IIT's The Bog') {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: iit,
        title: name
        }))}
      else if (name === 'Royal Decameron Montego Beach Resort' || name === 'Royalton White Sands Resort') {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: jamaicaflag,
        title: name
      }))}
      else if (name === 'PAWS Chicago' || name === 'PAWS Chicago Training Center') {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: catdog,
        title: name
      }))}  
      else {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        title: name
      }))}
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

}