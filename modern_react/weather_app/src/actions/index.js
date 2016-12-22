import EnvVar from '../../.env.js';

export function getForecast(city) {
  const forecastData = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${EnvVar.OPEN_WEATHER_KEY}`

  console.log('getForecast Action Creator Argument: ', city);
  console.log('forecastData: ', forecastData);

  return {
    type: 'GET_FORECAST',
    payload: forecastData
  };
}
