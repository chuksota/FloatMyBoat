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
  const sessionUser = useSelector(state=> state.session.user)
  let userForm;
  if(sessionUser){
    userForm = (
      <CreateNewListing/>
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
        <div key={listing.id} className={`listingCard`}>
          <Link to={`/listing/${listing.id}`}>{`${listing.description}, ${listing.address}`}</Link>
        </div>
      ))}
    </div>
    </>

  )
}


export default DestinationListings
