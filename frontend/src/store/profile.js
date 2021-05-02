import {csrfFetch} from './csrf'
const LOAD_USER = 'profile/LOAD_USER'
const DELETE_LISTING = 'listings/DELETE_LISTINGS'

const loadUser = userInfo => {
  return {
    type: LOAD_USER,
    userInfo
  }
}
const deleteListing = listingId=> ({
  type: DELETE_LISTING,
  listingId
})

export const deleteAListing = (id) => async dispatch => {
  const response = await csrfFetch(`/api/destinations/listings/${id}`, {
    method: 'DELETE'
  })
  if(!response.ok)throw response;
    dispatch(deleteListing(id))
}

export const getUserInformation = (id) => async dispatch => {
  const response = await fetch(`/api/users/${id}`)
  if (!response.ok) throw response;
  const userInfo = await  response.json()
  dispatch(loadUser(userInfo.Listings))

}

const userReducer = (state = {all: [], current:{}}, action) => {
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
    case DELETE_LISTING: {
      const newState = {}
      newState.all= []
      newState.current = {}
      console.log(action)
      newState.all = state.all.filter(item=> item.id !== action.listingId )
      console.log(newState)
      return newState
    }
    default:
      return state
  }
}

export default userReducer
