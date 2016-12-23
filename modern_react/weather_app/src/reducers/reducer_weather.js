import { FETCH_WEATHER } from '../actions/index.js';

// State argument is not application state, only the state
// this reducer is responsible for
export default function (state = [], action) {
  console.log('reducer_weather running with: ', action);

  switch (action.type) {
  case FETCH_WEATHER:
    return [action.payload.data, ...state];
  default:
    return state;
  }
}
