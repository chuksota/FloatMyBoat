import { getOneListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getReviews } from '../../store/reviews'
import './ListingDetails.css'
import CreateReviewForm from '../CreateReviewForm'

function ListingDetails(){
  const {id} = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state=> state.destinationListings.current)
  const reviews = useSelector(state=> state.reviews.all )
  const sessionUser = useSelector(state=> state.session.user)

  useEffect(()=>{
    dispatch(getOneListing(id))
    dispatch(getReviews(id))
  },[dispatch, id])
  let sessionlinks;
  if(sessionUser){
    sessionlinks = (
      <CreateReviewForm/>
    )
  }
  return(
    <div>
      <div className='listing__details-container'>
      Address: {details.address}
      Boat Type: {details.boatType}
      </div>
      <h1>Reviews</h1>
      <CreateReviewForm className='Leave a review'/>
      <div className='reviews_container'>
        {reviews.map(review => (
          <div key={review.id} className='review_cards'>
            Author: {review.author}

            Review: {review.review}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListingDetails
