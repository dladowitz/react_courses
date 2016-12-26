import { FIND_ROUTE, GET_LOCATIONS } from '../actions/index.js';

export default function (state = {}, action) {
  switch (action.type) {
  case FIND_ROUTE:
    return { ...state, start: action.payload.start, destination: action.payload.destination };
  case GET_LOCATIONS:
      return { ...state, locations: action.payload };
  default:
    return state;
  }
}
