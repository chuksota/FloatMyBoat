

const CREATE_LISTING = 'listings/CREATE_LISTINGS'
const LOAD_LISTINGS = 'listings/LOAD_LISTINGS'
const GET_DETAILS = 'listings/GET_DETAILS'

const loadListings = listings => ({
  type: LOAD_LISTINGS,
  listings
})

const getDetails = details => ({
  type: GET_DETAILS,
  details
})

const createListing = newListing => ({
  type: CREATE_LISTING,
  newListing
})

export const getOneListing = (id) => async dispatch => {
  const response = await fetch(`/api/listings/${id}`)
  if(response.ok){
    const listingDetails = await response.json()
    dispatch(getDetails(listingDetails))
  }
}

export const getListings = (id) => async dispatch =>{
  const response = await fetch(`/api/destinations/${id}`)

  if(response.ok){
    const listings = await response.json();
    dispatch(loadListings(listings))
  }
}


const listingsReducer = (state = {all: [], current:{}} , action) => {
  switch(action.type){
    case LOAD_LISTINGS: {
      const newState = {}
      const allListings = []
      action.listings.allListings.forEach(listing=>{
        allListings.push(listing)
      })
      newState.all=allListings
      newState.current = {...state.current}
      return newState
    }
    case CREATE_LISTING: {
      const newState = {}
      const allListings = []
      state.all.forEach(listing=>{
        allListings.push(listing)
      })
      newState.all=allListings
      newState.current = {...state.current}
      newState.all.push(action.newListing)
      return newState
    }
    case GET_DETAILS: {
      const newState = {}
      const allListings = []
      state.all.forEach(listing=>{
        allListings.push(listing)
      })
      newState.all=allListings
      newState.current = action.details
      return newState
    }
    default:
      return state
  }
}
 export default listingsReducer
