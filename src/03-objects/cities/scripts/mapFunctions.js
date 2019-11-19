let map;

const mapFuncs = {

    markerArray: (array) => {

    },

    initMap:() => {
      
        let mapOptions = {
          zoom: 5,
          center: new google.maps.LatLng(51.0447,-114.0719),
          mapTypeId: 'roadmap'
        };
        map = new google.maps.Map(document.getElementById('idMap'), mapOptions);
    },

    addMarker:(array) => {
        for (let index = 0; index < array.length; index++) {
          let lat = array[index].lat;
          let long = array[index].long;
          let city = array[index].city
          let latlng = new google.maps.LatLng(lat, long);
          let marker = new google.maps.Marker({
            position: latlng,
            map: map,
            label: city
          })
          
        }
      }


}

export default mapFuncs


