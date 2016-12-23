import { FETCH_POSTS }   from '../actions/index.js';
// import { FETCH_WEATHER } from '../actions/index.js';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  console.log('recuder_posts action: ', action);

  switch (action.type) {
  case FETCH_POSTS:
    console.log('FETCH_POSTS case statement triggered');
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
