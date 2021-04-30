import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {deleteAListing} from '../../store/profile'

const Listing = ({listing}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const goToReviews=(id)=>{
    history.push(`listing/${id}`)
  }
  const deleteListing = (id)=> {
    dispatch(deleteAListing(id))
  }
  return (
    <div className={`dashboard__listingCard`}>
    <p>{listing.description}</p>
   <button className='seeReviewsButton' onClick={()=>goToReviews(listing.id)}>See reviews</button>
   <button className='deleteReviewsButton' onClick={()=> {deleteListing(listing.id)}}>Delete Listing</button>
  </div>
  )
}

export default Listing
