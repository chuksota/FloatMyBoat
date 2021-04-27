import {getListings} from '../../store/listings'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'

const DestinationListings = () =>{
  const dispatch = useDispatch()
  const {destinationId} = useParams()
  const listings = useSelector(state=> state.destinationListings)
  console.log('Im in the listings component',listings)
  useEffect(()=>{
    dispatch(getListings(destinationId))
  }, [destinationId, dispatch])
  return(
    <>
    {listings.map(listing => (
        <div key={listing.id} className='locationCard'>
          {`${listing.description}, ${listing.address}`}
        </div>
      ))}
    </>
  )
}


export default DestinationListings
