function initMap() {
   var options={
    zoom:15,
    center:{lat:-21.232,lng:-44.9947}
   };
   var map = new 
   google.maps.Map(document.getElementById('map'), options);
   var marker = new google.maps.Marker({
    position:{lat:-21.232,lng: -44.9947},
    map:map
   });

}