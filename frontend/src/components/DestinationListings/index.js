import { getListings } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CreateNewListing from '../CreateListingForm'
import './DestinationListings.css'
const DestinationListings = () => {
  const dispatch = useDispatch()
  const { destinationId } = useParams()
  const listings = useSelector(state => state.destinationListings.all)
  const sessionUser = useSelector(state => state.session.user)
  console.log(sessionUser)
  let userForm;
  if (sessionUser) {
    userForm = (
      <CreateNewListing user={sessionUser} id={destinationId} />
    )
  } else {
    userForm = (
      <h2>Log in or create an account to list your boat!</h2>
    )
  }

  useEffect(() => {
    dispatch(getListings(destinationId))
  }, [destinationId, dispatch])

  return (
    <>
      <h1>Pick your next adventure!</h1>
      {userForm}
      <div className='listings__container'>

        {listings.map(listing => (
          <Link key={listing.id} to={`/listing/${listing.id}`}>
            <div key={listing.id} className={`listingCard-${listing.id}`}>
              <img src={listing.imageUrl} className="listingPictures"></img>
              <p>
                Description: {listing.description}
              </p>
              <p>
                Address: {listing.address}
              </p>
              <p>
               Boat Type:  {listing.boatType}
              </p>
              <p>
               Price per day: {listing.price}
                </p>
              <p>
                Number of Guests: {listing.numOfGuests}
                </p>
            </div>
          </Link>
        ))}
      </div>
    </>

  )
}


export default DestinationListings
