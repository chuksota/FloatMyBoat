import {getListings} from '../../store/listings'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'

const DestinationListings = () =>{
  const dispatch = useDispatch()
  const {destinationId} = useParams()
  const listings = useSelector(state=> state.destinationListings)

  useEffect(()=>{
    dispatch(getListings(destinationId))
  }, [destinationId, dispatch])
  return(
    <>
          <button>add a new listing</button>
    {listings.map(listing => (
        <div key={listing.id} className={`listingCard-${listing.id}`}>
          {`${listing.description}, ${listing.address}`}
        </div>
      ))}
      </>

  )
}


export default DestinationListings
