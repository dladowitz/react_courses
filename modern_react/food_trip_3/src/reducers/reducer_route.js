import { FIND_ROUTE } from '../actions/index.js';

export default function (state = {}, action) {
  switch (action.type) {
  case FIND_ROUTE:
    return { ...state, route: action.payload };
  default:
    return state;
  }
}
