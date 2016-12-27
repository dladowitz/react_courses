import { GET_DIRECTIONS, GET_LOCATIONS } from '../actions/index.js';

export default function (state = {}, action) {
  switch (action.type) {
  case GET_DIRECTIONS:
    console.log('GET_DIRECTIONS reducer side action payload: ', action.payload);
    return { ...state, steps: action.payload };
  case GET_LOCATIONS:
      return { ...state, locations: action.payload };
  default:
    return state;
  }
}
