import { FETCH_POST, FETCH_POSTS, DELETE_POST } from '../actions/index.js';
// import { FETCH_WEATHER } from '../actions/index.js';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  console.log('recuder_posts action: ', action);

  switch (action.type) {
  case FETCH_POSTS:
    console.log('FETCH_POSTS case statement triggered');
    return { ...state, all: action.payload.data };
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  case DELETE_POST:
    return { ...state };
  default:
    return state;
  }
}
