// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

import { GET_DIRECTIONS } from '../actions/index.js';

function getPlaces(steps) {
  let places = [];

  const placesPromise = new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);

    steps.forEach((step) => {
      const latlng = { lat: step.start_point.lat(), lng: step.start_point.lng() };

      service.nearbySearch({
        location: latlng,
        radius: 230,
        type: ['food']
      }, (results, status) => { // not sure why this has a problem when put in a method
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // console.log('Status: ', status);
          // console.log('Results: ', results);
          places = [...places, ...results];
          console.log('places: ', places);
          // this.addMarkers(results);
        } else {
          console.log('Error getting places');
          reject();
        }
      });
    });

    resolve();
  });

  placesPromise.then(() => {
    console.log('Left forEach Loop');
  });
}

export default function (state = {}, action) {
  switch (action.type) {
  case GET_DIRECTIONS:
    console.log('GET_DIRECTIONS reducer side action payload: ', action.payload);
    const places = getPlaces(action.payload);
    return { ...state, steps: action.payload, places: places };
  default:
    return state;
  }
}
