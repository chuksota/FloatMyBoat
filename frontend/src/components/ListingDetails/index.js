import { getOneListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'



function ListingDetails(){
  const {id} = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state=> state.destinationListings.current)
  const reviews = useSelector(state=> state.reviews.all )
  console.log(reviews)
  useEffect(()=>{
    dispatch(getOneListing(id))
  },[dispatch, id])

  return(
    <div>
     Address: {details.address}
      Boat Type: {details.boatType}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            {review.author}
            {review.review}
          </li>
        ))}
        this is where the reviews will go
      </ul>
    </div>
  )
}

export default ListingDetails
