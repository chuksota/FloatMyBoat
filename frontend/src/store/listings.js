


const LOAD_LISTINGS = 'listings/LOAD_LISTINGS'

const loadListings = listings => ({
  type: LOAD_LISTINGS,
  listings
})

export const getListings = (id) => async dispatch =>{
  const response = await fetch(`/api/destinations/${id}`)

  if(response.ok){
    const listings = await response.json();
    console.log('Im in the thunk action', listings)
    dispatch(loadListings(listings))
  }
}

const listingsReducer = (state = [] , action) => {
  switch(action.type){
    case LOAD_LISTINGS: {
      const allListings = []
      action.listings.allListings.forEach(listing=>{
        allListings.push(listing)
      })
      return [...allListings]
    }
    default:
      return state
  }
}
 export default listingsReducer
