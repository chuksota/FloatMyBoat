import './profilePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import { getDestinations } from '../../store/destinations'
import { NavLink } from 'react-router-dom'
import { getUserInformation } from '../../store/profile'


import Listing from './Listing'

function ProfilePage() {
  const dispatch = useDispatch()
  const destinations = useSelector(state => state.destination)
  const user = useSelector(state => state.session.user)
  const userInfo = useSelector(state => state.userInfo.all)

  let location;
  if(user.id === 1){
    location = "New York City, United States"
  } else if(user.id === 2) {
    location = "Istanbul, Turkey"
  } else if(user.id === 3) {
    location = "Enohia Nkalu, Africa"
  } else if(user.id === 4) {
    location = "Mykonos, Greece"
  }

  useEffect(() => {
    dispatch(getDestinations())
    dispatch(getUserInformation(user.id))
  }, [dispatch, user.id])

  return (
    <main className="index__dashboard">
      <div className="profile_info">
        <div className='userInfo'>
          <img className='profilePic' alt='' src='https://floatyourboatimages.s3.us-east-2.amazonaws.com/Demo-lition+profile+pic.jpg' />
          <div className='name_and--email'>
          <p>Username: {user.username} </p>
          <p>Email: {user.email}</p>
          </div>
        </div>
      </div>

      <div className='profile_content'>
        <div className='all__listings'>
          <h3 className='headings'> Your current listings</h3>
          {
            userInfo.map(listing =>
              <Listing key={listing.id} listing={listing} location={location} />
            )}
        </div>
        <div className='about'>
          <h3 className='headings'>Destinations</h3>
          {
            destinations.map(destination => (
              <NavLink key={destination.id} to={`/destinations/${destination.id}/listings`}>
                <div key={destination.id} className={`dashboardLocationCards`}>
                  <div>{`${destination.city}, ${destination.country}`}</div>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
