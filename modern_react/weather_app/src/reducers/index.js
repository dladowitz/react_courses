import { combineReducers } from 'redux';
import CityForecastReducer from './reducer_city_forecast.js';

const rootReducer = combineReducers({
  citiesData: CityForecastReducer
});

// console.log('rootReducer: ', CityForecastReducer;
export default rootReducer;
