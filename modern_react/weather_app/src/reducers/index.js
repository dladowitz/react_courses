import { combineReducers } from 'redux';
import SearchReducer from './reducer_search.js';

const rootReducer = combineReducers({
  search: SearchReducer
});

export default rootReducer;
