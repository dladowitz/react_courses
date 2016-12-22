export function updateSearch(value) {
  console.log('updateSearch Action Creator argument: ', value);

  return {
    type: 'UPDATE_SEARCH',
    payload: value
  };
}
