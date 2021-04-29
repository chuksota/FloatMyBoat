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
  useEffect(() => {
    dispatch(getDestinations())
    dispatch(getUserInformation(user.id))
  }, [dispatch, user.id])
  return (
    <main>
    <h1>Welcome back {user.username}! </h1>
    <div className='dashboard'>
      <div className='dash_board--left'>

      </div>
      <div className='accepting_guests'>Bookings</div>
      <div className='all__listings'>
       {userInfo.map(listing=>(
         <div key={listing.id} className={`dashboard__listingCard`}>
         {listing.description}
         <NavLink key={listing.id}className='see-reviews' to={`/listing/${listing.id}`}>See reviews</NavLink>
         </div>
       ))}
      </div>
      <div className='about'> {
        destinations.map(destination => (
          <NavLink key={destination.id} to={`/destinations/${destination.id}/listings`}>
              <div key={destination.id} className={`dashboardLocationCards`}>
              {`${destination.city}, ${destination.country}`}
            </div>
            </NavLink>
        ))}</div>
    </div>
    </main>
  )
}

export default ProfilePage
