import './profilePage.css'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getDestinations} from '../../store/destinations'
import {NavLink} from 'react-router-dom'
import {getUserInformation} from '../../store/profile'
function ProfilePage(){
  const dispatch = useDispatch()
  const destinations = useSelector(state => state.destination)
  const user = useSelector(state=>state.session.user)
  const userInfo = useSelector(state=> state.userInfo)
  console.log(user)
  useEffect(()=>{
    dispatch(getDestinations())
    dispatch(getUserInformation(user.id))
  },[dispatch])
  return(
    <div className='dashboard'>
    <div className='dash_board--left'>Left View Area</div>
    <div className='accepting_guests'>Whether or not you're accepting guests</div>
    <div className='all__listings'>All listings</div>
    <div className='about'> {destinations.map(destination => (
        <div key={destination.id} className={`locationCard-${destination.id}`}>
         <NavLink to={`/destinations/${destination.id}/listings`}>
         {`${destination.city}, ${destination.country}`}
           </NavLink>
        </div>
      ))}</div>
    </div>
  )
}

export default ProfilePage
