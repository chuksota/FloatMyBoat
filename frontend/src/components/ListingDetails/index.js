import { getOneListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getReviews } from '../../store/reviews'
import {deleteReview} from '../../store/reviews'
import './ListingDetails.css'
import CreateReviewForm from '../CreateReviewForm'
import CreateReviewModal from '../CreateReviewForm/index'
function ListingDetails(){
  const {id} = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state=> state.destinationListings.current)
  const reviews = useSelector(state=> state.reviews.all )
  const sessionUser = useSelector(state=> state.session.user)




  const deleteAReview = (id) => {
   let alert = window.confirm("Are you sure you want to delete this review?")
   if(alert){
     dispatch(deleteReview(id))
   }
  }


  useEffect(()=>{
    dispatch(getOneListing(id))
    dispatch(getReviews(id))
  },[dispatch, id])

  let reviewForm;
  if(sessionUser){
    reviewForm = (
      <CreateReviewModal />
    );
  }else {
    reviewForm =(
      <h2>Log in or create an account to leave a review!</h2>
      )
  }
  return(
    <div>


      <div className='listing__details-container'>
      <img src={details.imageUrl} className="listingPicture" alt=''></img>
        <div>
          Description: {details.description}
        </div>
      <div>
      Boat Type: {details.boatType}
        </div>
        <div>
          Price per day: $ {details.price}
        </div>
        <div>
          Number of Passengers: {details.numOfGuests}
        </div>
      </div>
      <div className='leaveAReview'>
      {reviewForm}
      </div>

      <div className='reviews_container'>
        {reviews.map(review => (
          <div key={review.id} className={`review_cards`}>

            <div className='reviewAuthor'>Author: {review.author} </div>

            <div className='reviewText'>Review: {review.review} </div>
            <button className='delete_review--button' onClick={()=>deleteAReview(review.id)}>Delete This review</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListingDetails
