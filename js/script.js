function initMap() {
  var iit_tower = {lat: 41.831602, lng: -87.627231};
  var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 18, 
		  center: iit_tower,
	      mapTypeId: 'satellite'
	  });
  var marker = new google.maps.Marker({position: iit_tower, map: map});
  
  google.maps.event.addListener(marker, 'mouseover', function() {
	  infowindow.open(myMap, marker);
});

}

google.maps.addDomListener(window, 'load', init);

//Slideshow//////
var slides = 0;
var images = [];
var time = 5000;

images[0] = 'images/chicago.jpg';
images[1] = 'images/chicago1.png';
images[2] = 'images/chinatown.jpg';

function changeImg(){
  document.getElementById('slide_image').src = images[slides];
  if (slides < images.length - 1){
	slides++;
  }else {
	slides = 0;
  }
  setTimeout("changeImg()",time);
}
window.onload = changeImg;