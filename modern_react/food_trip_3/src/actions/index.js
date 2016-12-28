export const GET_DIRECTIONS = 'GET_DIRECTIONS';

function createRequestParams(props) {
  return {
    origin: props.start,
    destination: props.destination,
    provideRouteAlternatives: false,
    travelMode: 'DRIVING',
    drivingOptions: {
      departureTime: new Date(/* now, or future date */),
      trafficModel: 'pessimistic'
    },
    unitSystem: google.maps.UnitSystem.IMPERIAL
  };
}

function getDirectionsFromGooglePromise(props) {
  const promise = new Promise((resolve, reject) => {
    const directionsService = new google.maps.DirectionsService();
    const requestParams = createRequestParams(props);

    directionsService.route(requestParams, (response, status) => {
      if (status === 'OK') {
        console.log('directionsService success: ', response.routes[0].legs[0].steps);
        resolve(response.routes[0].legs[0].steps);
      } else {
        console.log('directionsService Error: ', response);
        reject(response);
      }
    });
  });

  return promise;
}

export function fetchDirections(props) {
  // Not sure exactly when the promise runs. Possibly before going to middleware.
  // Possibly middleware just runs if the promise hasn't been resolved or rejected yet.
  // And passes on if it's already been returned
  const directionsPromise = getDirectionsFromGooglePromise(props);
  console.log('GET_DIRECTIONS promise before sending: ', directionsPromise);

  return {
    type: GET_DIRECTIONS,
    payload: directionsPromise
  };
}
