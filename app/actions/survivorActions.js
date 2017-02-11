import axios from 'axios';

export function fetchSurvivors() {
  return function(dispatch) {
    axios.get("/survivors")
      .then((response) => {
        dispatch({type: "FETCH_SURVIVORS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_SURVIVORS_REJECTED", payload: err});
      });
  };
}
