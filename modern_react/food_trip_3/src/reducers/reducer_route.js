import { GET_DIRECTIONS } from '../actions/index.js';

export default function (state = {}, action) {
  switch (action.type) {
  case GET_DIRECTIONS:
    console.log('GET_DIRECTIONS reducer side action payload: ', action.payload);
    return { ...state, steps: action.payload };
  default:
    return state;
  }
}
