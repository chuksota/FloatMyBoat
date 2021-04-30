import { getOneListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getReviews } from '../../store/reviews'
import './ListingDetails.css'
import CreateReviewForm from '../CreateReviewForm'
import {NavLink} from 'react-router-dom'
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

  let reviewForm;
  if(sessionUser){
    reviewForm = (
      <CreateReviewForm listingId={id} user={sessionUser}/>
    );
  }else {
    reviewForm =(
      <h2>Log in or create an account to leave a review!</h2>
      )
  }
  return(
    <div>

      <div className='listing__details-container'>
      <div>
      Address: {details.address}
        </div>
      <div>
      Boat Type: {details.boatType}
        </div>
      </div>
      <h1>Reviews</h1>
      {reviewForm}
      <div className='reviews_container'>
        {reviews.map(review => (
          <div key={review.id} className={`review_cards`}>

            <div className='reviewAuthor'>Author: {review.author} </div>

            <div className='reviewText'>Review: {review.review} </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListingDetails
