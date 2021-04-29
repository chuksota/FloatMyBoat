import './profilePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDestinations } from '../../store/destinations'
import { NavLink } from 'react-router-dom'
import { getUserInformation } from '../../store/profile'
function ProfilePage() {
  const dispatch = useDispatch()
  const destinations = useSelector(state => state.destination)
  const user = useSelector(state => state.session.user)
  const userInfo = useSelector(state => state.userInfo.all)
  console.log(userInfo)
  useEffect(() => {
    dispatch(getDestinations())
    dispatch(getUserInformation(user.id))
  }, [dispatch, user.id])
  return (
    <>
    <h1>Welcome back {user.username}! </h1>
    <div className='dashboard'>
      <div className='dash_board--left'>

      </div>
      <div className='accepting_guests'>Bookings</div>
      <div className='all__listings'>
       {userInfo.map(listing=>(
        <div key={listing.id} className={`dashboard__listingCard-${listing.id}`}>
         {listing.description}
         </div>
       ))}
      </div>
      <div className='about'> {
        destinations.map(destination => (
          <div key={destination.id} className={`dashboardlocationCard-${destination.id}`}>
            <NavLink to={`/destinations/${destination.id}/listings`}>
              {`${destination.city}, ${destination.country}`}
            </NavLink>
          </div>
        ))}</div>
    </div>
    </>
  )
}

export default ProfilePage
