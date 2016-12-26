export const FIND_ROUTE = 'FIND_ROUTE';
export const GET_LOCATIONS = 'GET_LOCATIONS';

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

function getDirectionsFromGoogle(props) {
  const directionsService = new google.maps.DirectionsService();
  const requestParams = createRequestParams(props);
  console.log('requestParams', requestParams);
  directionsService.route(requestParams, (response, status) => {
    console.log('Returning from directionsService');
    if (status === 'OK') {
      console.log('success: ', response.routes[0].legs[0].steps)
      return response.routes[0].legs[0].steps
      // this.setState({ steps: response.routes[0].legs[0].steps });
    } else {
      console.log('directionsService Error: ', response);
    }
  });
}


export function fetchDirections(props) {
  // console.log('Action creator running: findRoute - props: ', props);
  const directionSteps = getDirectionsFromGoogle(props);

  return {
    type: FIND_ROUTE,
    payload: { start: props.start, destination: props.destination, steps: directionSteps }
  };
}

export function getLocationsFromRoute() {
  return {
    type: GET_LOCATIONS,
    // payload: []
    payload: ['Place One', 'Place Two', 'Place Three']
  };
}
