function initMap() {
  var bridgeport = {lat: 41.836408, lng: -87.648167};
  var map = new google.maps.Map(
      document.getElementById('map'), {
		  zoom: 18, 
		  center: bridgeport,
	      mapTypeId: 'satellite'
	  });
  var marker = new google.maps.Marker({position: bridgeport, map: map});
}

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