import React, { Component } from 'react';
import { connect } from 'react-redux';

class GMap extends Component {
  componentDidMount() {
    // looks like the google script isn't loaded in time
    setTimeout(this.initMap, 100);
  }

  // markerCallback(results, status) {
  //   console.log('markerCallback running');
    // if (status === google.maps.places.PlacesServiceStatus.OK) {
    //   console.log('Status: ', status);
    //   console.log('Results: ', results);
      // for (var i = 0; i < results.length; i++) {
      //   this.createMarker(results[i]);
      // }
    // }
  // }

  // createMarker(place) {
    // console.log('creating marker with: ', place)
    // const placeLoc = place.geometry.location;
    // const marker = new google.maps.Marker({
    //   map: map,
    //   position: place.geometry.location
    // });
  // }

  // TODO figure out how to pass this in so we can use defined function instead of inline function
  initMap() {
    const point = { lat: 37.7912557, lng: -122.3963987 };
    const map = new google.maps.Map(document.getElementById('map'), {
      center: point,
      zoom: 15
    });

    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch({
      location: point,
      radius: 500,
      type: ['food']
    }, function (results, status) { // not sure why this has a problem when put in a methoe
      console.log('markerCallback running');

      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('Status: ', status);
        console.log('Results: ', results);

        results.map((place) => {
          console.log('creating marker with: ', place);
          const placeLoc = place.geometry.location;
          const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        });
      }
    });
  }

  render() {
    console.log('GMap render steps: ', this.props)
    return (
      <div className='map-container'>
        <h4>Route Map</h4>
        <div id="map" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { steps: state.route.steps };
}

export default connect(mapStateToProps)(GMap);
