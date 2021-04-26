

const LOAD_DESTINATIONS = 'destinations/LOAD_DESTINATIONS'

const loadDestinations = destinations => ({
  type: LOAD_DESTINATIONS,
  destinations
})

export const getDestinations = () => async dispatch =>{
  const response = await fetch('/api/destinations')
  if(response.ok){
    const destinations = await response.json();
    dispatch(loadDestinations(destinations))
  }
}

const destinationsReducer = (state = [] , action) => {
  switch(action.type){
    case LOAD_DESTINATIONS: {
      const allDestinations = []
      action.destinations.allDestinations.forEach(destination=>{
        allDestinations.push(destination)
      })
      return [...allDestinations]
    }
    default:
      return state
  }
}
 export default destinationsReducer
