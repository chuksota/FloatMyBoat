const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'

const loadReviews = reviews => ({
  type: LOAD_REVIEWS,
  reviews
})

export const getReviews = (id) => async dispatch => {
  const res = await fetch(`/api/reviews/${id}`)
  if(res.ok){
    const reviews = await res.json()
    dispatch(loadReviews(reviews))
  }
}

const reviewsReducer = (state = {all: [], current:{}} , action) => {
  switch(action.type){
    case LOAD_REVIEWS: {
      const newState = {}
      const allReviews = []
      action.reviews.forEach(review=>{
        allReviews.push(review)
      })
      newState.all=allReviews
      newState.current = {...state.current}
      return newState
    }
  default:
    return state
  }
}
 export default reviewsReducer
