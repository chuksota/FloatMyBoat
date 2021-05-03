
import {csrfFetch} from './csrf'
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'

const deleteAReview = deletedReview => ({
  type: DELETE_REVIEW,
  deletedReview
})
const  createAReview = review => ({
  type: CREATE_REVIEW,
  review
})
const loadReviews = reviews => ({
  type: LOAD_REVIEWS,
  reviews
})

export const createReview = newReview => async dispatch => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(newReview)
  })
  if(!res.ok) throw res;
  const review = res.json()
  dispatch(createAReview(review))
}

export const getReviews = (id) => async dispatch => {
  const res = await fetch(`/api/reviews/${id}`)
  if(res.ok){
    const reviews = await res.json()
    dispatch(loadReviews(reviews))
  }
}

export const deleteReview = (id) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE"
  })
  if(!res.ok) throw res;
  dispatch(deleteAReview(id))
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
      state.all.forEach(review=>{
        allReviews.push(review)
      })
      newState.all=allReviews
      newState.current = {...state.current}
      newState.all.push(action.review)
      return newState
    }
    case DELETE_REVIEW: {
      const newState = {}
      newState.all= []
      newState.current = {}
      newState.all = state.all.filter(review=> review.id !== action.reviewId)
      return newState
    }
  default:
    return state
  }
}
 export default reviewsReducer
