import React, { Component } from 'react';
import { connect } from 'react-redux';

class GMap extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  // TODO figure out how to pass this in so we can use defined function instead of inline function
  initMap() {
    const center = { lat: 37.7912557, lng: -122.3963987 };
    const map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 12
    });

    if (!this.state.map) {
      console.log('Updating state')
      this.setState({ map: map });
    }
  }

  addMarkers(places) {
    // const map = this.state.map;

    console.log('adding batch of markers');
    // const infowindow = new google.maps.InfoWindow();

    // places.forEach((place) => {
    //   console.log('Adding Place: ', place)
      // const placeLoc = place.geometry.location;
      // const marker = new google.maps.Marker({
      //   map: map,
      //   position: place.geometry.location
      // });

      // google.maps.event.addListener(marker, 'click', function() {
      //   infowindow.setContent(place.name);
      //   infowindow.open(map, this);
      // });
    // });
  }

  getPlaces() {
    // const service = new google.maps.places.PlacesService(map);
    //
    // let places = [];
    //
    // this.props.steps.forEach((step) => {
    //   const latlng = { lat: step.start_point.lat(), lng: step.start_point.lng() };
    //
    //   service.nearbySearch({
    //     location: latlng,
    //     radius: 230,
    //     type: ['food']
    //   }, (results, status) => { // not sure why this has a problem when put in a method
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //       // console.log('Status: ', status);
    //       // console.log('Results: ', results);
    //       console.log('batch of places: ', results);
    //       // this.addMarkers(results);
    //     }
    //   });
    // });
  }

  render() {
    setTimeout(() => this.initMap(), 100);
    console.log('Gmap State: ', this.state)
    console.log('GMap Props: ', this.props);

    if (this.props.steps) {
      this.getPlaces();
    }

    return (
      <div className='map-container'>
        <h4>Route Map</h4>
        <div id="map" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    steps: state.route.steps,
    places: state.route.places
  };
}

export default connect(mapStateToProps)(GMap);
