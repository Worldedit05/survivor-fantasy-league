import axios from 'axios';
const isProduction = process.env.NODE_ENV === 'production';
// const config = isProduction ? require('../../config/config.sample.js') : require('../../config/config.js');

export function fetchWeather() {

  return function(dispatch) {

    // let apiKey = config.apixu.apiKey;
    const apiKey = process.env.WEATHER_API_KEY;

    axios.get("https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=-17.666667, 177.083333")
    .then((response) => {
      dispatch({type: "FETCH_WEATHER_FULFILLED", payload: response.data});
    })
    .catch((err) => {
      dispatch({type: "FETCH_WEATHER_REJECTED", payload: err});
    });
  };
}
