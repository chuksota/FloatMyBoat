import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { getDestinations } from '../../store/destinations'
import DestinationListings from '../DestinationListings/index'
import ProfilePage from '../ProfilePage/index'
import './Destinations.css'
function DestinationsPage() {
  const dispatch = useDispatch()
  const destinations = useSelector(state => state.destination)
  const [clicked, setClicked] = useState(false)
  const [destinationId, setDestinationId] = useState(0)


  useEffect(() => {
    dispatch(getDestinations())
  }, [dispatch])

  return (
    <main>
      {destinations.map(destination => (
        <div onClick={() => setClicked(true)} key={destination.id} className='locationCard'>
          {`${destination.city}, ${destination.country}`}
        </div>
      ))}
      { clicked ? (
          <Route path={`destination/:destinationId`}>
            <DestinationListings />
          </Route>
      ) : (
        <ProfilePage/>
      )
  }
    </main>
  )
}

export default DestinationsPage
