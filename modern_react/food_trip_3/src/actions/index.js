export const FIND_ROUTE = 'FIND_ROUTE';
export const GET_LOCATIONS = 'GET_LOCATIONS';

export function findRoute(props) {
  // console.log('Action creator running: findRoute - props: ', props);
  return {
    type: FIND_ROUTE,
    payload: props
  };
}

export function getLocationsFromRoute() {
  return {
    type: GET_LOCATIONS,
    // payload: []
    payload: ['Place One', 'Place Two', 'Place Three']
  };
}
