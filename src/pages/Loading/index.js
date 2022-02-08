import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import UserContext from '../../context/userContext';
import UserProfileContext from '../../context/userProfileContext';
import Spinner from "react-spinkit";

const Loading = () => {
    const {setUserContext} = useContext(UserContext);
    const {setUserProfileContext} = useContext(UserProfileContext);

    const history = useHistory();
    
    // Get user database profile
    const getUserProfile = (uid) => {
        const userRef = firebase.database().ref('users/'+uid)
        userRef.on('value', gotUserProfile, errUserProfile)
    };
    
    const gotUserProfile = data => {
        const userProfile = data.val();
        setUserProfileContext(userProfile);
    };
 
    const errUserProfile = error => {
        console.log('Error in /loading -- errUserProfile function', error)
    };

    useEffect(() =>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserContext(user);   
                getUserProfile(user?.uid); 
                history.push('/home')
            } else {
            // No user is signed in.
                history.push('/home')
            }
        });    
    })

    return (
        <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Spinner name="folding-cube" color="#635BFF" />
        </div>
    )
}
export default Loading;