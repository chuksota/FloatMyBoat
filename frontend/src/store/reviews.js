const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'

const loadReviews = reviews => ({
  type: LOAD_REVIEWS,
  reviews
})

const createReview = newReview => async dispatch => {
  const res = await fetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(newReview)
  })
  if(!res.ok) throw res;
  const review = res.json()
  dispatch(createReview(newReview))
}

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
    case CREATE_REVIEW: {
      const newState = {}
      const allReviews = []
      action.reviews.forEach(review=>{
        allReviews.push(review)
      })
      newState.all=allReviews
      newState.current = {...state.current}
      newState.all.push(action.newReview)
      return newState
    }
  default:
    return state
  }
}
 export default reviewsReducer
