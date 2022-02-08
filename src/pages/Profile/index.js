import React, { useRef, useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import UserContext from "../../context/userContext";
import UserProfileContext from '../../context/userProfileContext';

import Spinner from "react-spinkit";
import toast from "react-simple-toasts";
import firebase from 'firebase';

import { Theme } from '../../Theme/Helpers';
import HeaderBar from "../../components/HeaderBar";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileBar from "../../components/ProfileBar";
import Footer from '../../components/Footer';

const Profile = ({}) => {
  const history = useHistory();

  const { user, setUserContext } = useContext(UserContext);
  const { userProfile, setUserProfileContext } = useContext(UserProfileContext);
  const [currentView, setCurrentView] = useState('profile');

  useEffect(() => {

  }, []);
   
  if(!userProfile) {
    return(
      <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Spinner name="folding-cube" color="#635BFF" />
      </div>
    )
  };  

  return(
    <div style={styles.container}>
        <HeaderBar/>
        <ProfileHeader userProfile={userProfile}/>
        <ProfileBar 
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        <Footer/>
    </div>
  )
};

const styles = {
  container:{
    ...Theme.container,
  },
  userBody:{
    height:'30vh',
    width:'100%',
    display:'flex', 
    paddingLeft: '4%',
    paddingRight:'4%',
    flexDirection:'row', 
    justifyContent:'flex-start',
    alignItems:'center',
  },
  supBody:{
    width:'100%',
    display:'flex', 
    paddingLeft: '4%',
    paddingRight:'4%',
    flexDirection:'column', 
    justifyContent:'flex-start',
  },
  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
}


export default Profile;
