import { getOneListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'


function ListingDetails(){
  const {id} = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state=> state.destinationListings.current)
  useEffect(()=>{
    dispatch(getOneListing(id))
  },[dispatch, id])

  return(
    <div>
      {details.address}
      {details.boatType}
    </div>
  )
}

export default ListingDetails
