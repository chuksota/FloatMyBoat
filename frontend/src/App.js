import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import SignupFormPage from './components/SignupFormPage'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'
import DestinationsPage from './components/Destinations'
import DestinationListings from './components/DestinationListings'
import ListingDetails from './components/ListingDetails'
import HomePage from './components/HomePage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
    <Switch>
      <Route exact path='/'>
        <HomePage/>
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path='/signup'>
      <SignupFormPage/>
      </Route>
      <Route path='/profile'>
        <ProfilePage />
      </Route>
      <Route exact path='/destinations' >
        <DestinationsPage/>
      </Route>
      <Route path='/destinations/:destinationId/listings'>
        <DestinationListings/>
      </Route>
      <Route path='/listing/:id'>
        <ListingDetails/>
      </Route>
      <Route>
        <p>Page Not Found</p>
      </Route>
    </Switch>
      )}
    </>
  );
}

export default App;
