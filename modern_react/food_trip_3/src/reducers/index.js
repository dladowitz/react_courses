import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 

import routeReducer from './reducer_route.js';

const rootReducer = combineReducers({
  form: formReducer,
  route: routeReducer
});

export default rootReducer;
