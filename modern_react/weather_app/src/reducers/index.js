import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather.js';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

// console.log('rootReducer: ', CityForecastReducer;
export default rootReducer;
