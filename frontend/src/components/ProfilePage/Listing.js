import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {deleteAListing} from '../../store/profile'
const Listing = ({listing, location}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const goToReviews=(id)=>{
    history.push(`listing/${id}`)
  }

  const deleteListingConfirmation =(id)=> {
    let result = window.confirm('Are you sure you want to delete this listing?')
    if(result){
    dispatch(deleteAListing(id))
    }
  }
  return (
    <div className={`dashboard__listingCard`}>
      <img className='profileListingPic' src={listing.imageUrl} alt=''/>
    <p> Description: {listing.description}</p>
    <p> Location: {location}</p>
   <button className='seeReviewsButton' onClick={()=>goToReviews(listing.id)}>See reviews</button>
   <button className='deleteReviewsButton' onClick={()=> {deleteListingConfirmation(listing.id)}}>Delete Listing</button>
  </div>
  )
}

export default Listing
