import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import  {getDestinations} from '../../store/destinations'
import './Destinations.css'
function DestinationsPage(){
  const dispatch = useDispatch()
  const destinations = useSelector(state=> state.destination)

  useEffect(()=> {
    dispatch(getDestinations())
  }, [dispatch])

  return(
    <>
    <div></div>
    {destinations.map(destination=>(
      <div key={destination.id} className='locationCard'>
        {`${destination.city}, ${destination.country}`}
      </div>
    ))}
    </>
  )
}

export default DestinationsPage
