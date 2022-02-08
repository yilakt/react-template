import React,{ useEffect, useState } from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';
import history from './services/history';
import {firebaseConfig} from './firebaseConfig';
import firebase from "firebase"
import UserContext from './context/userContext';
import UserProfileContext from './context/userProfileContext';
import ReactPixel from 'react-facebook-pixel';

firebase.initializeApp(firebaseConfig);

function App () {
  const [user, setUserContext ] = useState(null);
  const [userProfile, setUserProfileContext ] = useState(null);

  // useEffect(async() => {
  //   ReactPixel.init('345842940726939', null, {
  //     autoConfig: true,
  //     debug: true,
  //   });
  //   ReactPixel.pageView();
  //   ReactPixel.track("ViewContent")
  // },[]);

  return (
    <Router history={history}>
      <UserContext.Provider value={{ user, setUserContext }}>
        <UserProfileContext.Provider value={{ userProfile, setUserProfileContext }}>
              <Routes/>
        </UserProfileContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}


export default App;
