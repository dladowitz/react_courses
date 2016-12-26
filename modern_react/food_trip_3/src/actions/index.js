export const FIND_ROUTE = 'FIND_ROUTE'

export function findRoute(props) {
  // console.log('Action creator running: findRoute - props: ', props);


  return {
    type: FIND_ROUTE,
    payload: props
  };
}
