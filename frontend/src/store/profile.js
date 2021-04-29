
const LOAD_USER = 'profile/LOAD_USER'


const loadUser = userInfo => {
  return {
    type: LOAD_USER,
    userInfo
  }
}


export const getUserInformation = (id) => async dispatch => {
  const response = await fetch(`/api/users/${id}`)
  if (!response.ok) throw response;
  const userInfo = await  response.json()
  console.log("In thunk", userInfo)
  dispatch(loadUser(userInfo.Listings))

}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER: {
      const newState = {}
      const userInfo = []
      action.userInfo.forEach(info => {
        userInfo.push(info)
      })
      newState.all = userInfo
      newState.current = { ...state.current }
      return newState
    }
    default:
      return state
  }
}

export default userReducer
