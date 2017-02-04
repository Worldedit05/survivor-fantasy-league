export default function reducer(state={
  user:'',
}, action) {

  switch (action.type) {
    case 'GET_USERS':
      return {...state, user: state.user}
    default:
      return state;
  }
}
