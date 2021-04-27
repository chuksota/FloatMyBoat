import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDestinations } from '../../store/destinations'
import {NavLink} from 'react-router-dom'
import './Destinations.css'
function DestinationsPage() {
  const dispatch = useDispatch()
  const destinations = useSelector(state => state.destination)
  
  useEffect(() => {
    dispatch(getDestinations())
  }, [dispatch])

  return (
    <main>
      {destinations.map(destination => (
        <div key={destination.id} className={`locationCard-${destination.id}`}>
         <NavLink to={`/destinations/${destination.id}/listings`}>
         {`${destination.city}, ${destination.country}`}
           </NavLink>
        </div>
      ))}
    </main>
  )
}

export default DestinationsPage
