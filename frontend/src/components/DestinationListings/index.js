import { getListings } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CreateNewListing from '../CreateListingForm'
const DestinationListings = () => {
  const dispatch = useDispatch()
  const { destinationId } = useParams()
  const listings = useSelector(state => state.destinationListings.all)
  const sessionUser = useSelector(state=> state.session.user)
  let userForm;
  if(sessionUser){
    userForm = (
      <CreateNewListing/>
    )
  } else {
    <h2>Log in or create an account to list your boat!</h2>
  }

  useEffect(() => {
    dispatch(getListings(destinationId))
  }, [destinationId, dispatch])
  return (
    <>
    <h1>Pick your next adventure!</h1>
    {userForm}
      {listings.map(listing => (
        <div key={listing.id} className={`listingCard-${listing.id}`}>
          <Link to={`/listing/${listing.id}`}>{`${listing.description}, ${listing.address}`}</Link>
        </div>
      ))}
    </>

  )
}


export default DestinationListings
