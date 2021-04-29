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


  useEffect(() => {
    dispatch(getListings(destinationId))
  }, [destinationId, dispatch])
  return (
    <>
    <h1>Pick your next adventure!</h1>
    <CreateNewListing/>
      {listings.map(listing => (
        <div key={listing.id} className={`listingCard-${listing.id}`}>
          <Link to={`/listing/${listing.id}`}>{`${listing.description}, ${listing.address}`}</Link>
        </div>
      ))}
    </>

  )
}


export default DestinationListings
