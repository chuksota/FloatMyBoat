import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDestinations } from '../../store/destinations'
import { NavLink } from 'react-router-dom'
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
          <NavLink to={`/destinations/${destination.id}/listings`}>
            <div key={destination.id} className={`locationCard-${destination.id}`}>
              {`${destination.city}, ${destination.country}`}
            </div>
          </NavLink>
        ))}
    </main>
  )
}

export default DestinationsPage
