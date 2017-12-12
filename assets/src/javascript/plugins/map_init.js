      function initMap() {
         var myMarkerPosition = {
            lat: -7.9307459,
            lng: 112.6355576
         };
         var center = {
           lat: -7.9315694,
            lng: 112.6340448
         }
         var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: center,
            disableDefaultUI: true
         });
         var myMarker = 'https://fex.net/get/210714950881/141032180'
         var marker = new google.maps.Marker({
            position: myMarkerPosition,
            icon: myMarker,
            map: map,
            

         });
      }
