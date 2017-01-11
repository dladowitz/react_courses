import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  comments: (state = ['thing one', 'thing two']) => state
});

export default rootReducer;
