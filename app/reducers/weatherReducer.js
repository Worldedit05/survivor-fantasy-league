export default function reducer(state={
  currentWeather: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_WEATHER':
      return {...state, fetching: true}
    case 'FETCH_WEATHER_REJECTED':
      return {...state, fetching:false, error: action.payload}
    case 'FETCH_WEATHER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        currentWeather: action.payload,
      }
    default:
      return state;
  }
}
