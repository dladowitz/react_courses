// State argument is not application state, only the state
// this reducer is responsible for
export default function (state = null, action) {
  switch (action.type) {
  case 'UPDATE_SEARCH':
    return action.payload;
  default:
    return state;
  }
}
