import './profilePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getDestinations } from '../../store/destinations'
import { NavLink } from 'react-router-dom'
import { getUserInformation } from '../../store/profile'

import { useHistory } from 'react-router-dom'
import Listing from './Listing'

function ProfilePage() {
  const history = useHistory()
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
    <main className="index__dashboard">
      <div className="profile_info">
        <div className='userInfo'>
          <img className='profilePic' src={user.profileImageUrl} />
          <h1>{user.username} </h1>
        </div>
      </div>

      <div className='profile_content'>
        <div className='all__listings'>
          <h3 className='headings'> Your current listings</h3>
          {
            userInfo.map(listing =>
              <Listing key={listing.id} listing={listing} />
            )}
        </div>
        <div className='about'>
          <h3 className='headings'>Destinations</h3>
          {
            destinations.map(destination => (
              <NavLink key={destination.id} to={`/destinations/${destination.id}/listings`}>
                <div key={destination.id} className={`dashboardLocationCards`}>
                  {`${destination.city}, ${destination.country}`}
                  <img className='images' src={destination.imageUrl}/>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
