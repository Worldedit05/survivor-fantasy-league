export default function reducer(state={
  survivors: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_SURVIVORS':
      return {...state, fetching: true}
    case 'FETCH_SURVIVORS_REJECTED':
      return {...state, fetching: false, error: action.payload}
    case 'FETCH_SURVIVORS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        survivors: action.payload,
      }
    default:
      return state;
  }
}
