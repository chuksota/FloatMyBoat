import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDestinations } from '../../store/destinations'
import { NavLink } from 'react-router-dom'
import './Destinations.css'
function DestinationsPage() {
  const dispatch = useDispatch()
  const destinations = useSelector(state => state.destination)
  console.log(destinations)
  useEffect(() => {
    dispatch(getDestinations())
  }, [dispatch])

  return (
    <main>
      <h1 className='header'>Choose your next adventure!</h1>
      <p className='header2'>More destinations coming soon...</p>
        {destinations.map(destination => (
          <NavLink key={destination.id} to={`/destinations/${destination.id}/listings`}>
            <div key={destination.id} className={`locationCard-${destination.id}`}>
              <div className='destinationName'>
              {`${destination.city}, ${destination.country}`}
              <img src={destination.imageUrl} className='destinationImages'>
              </img>
              </div>
            </div>
          </NavLink>
        ))}
    </main>
  )
}

export default DestinationsPage
