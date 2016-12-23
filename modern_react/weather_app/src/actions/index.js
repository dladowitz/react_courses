import axios from 'axios';
import { OPEN_WEATHER_KEY } from '../../.env.js';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  console.log('fetchWeather Action Creator Argument: ', city);
  console.log('url: ', url);
  console.log(FETCH_WEATHER)

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
