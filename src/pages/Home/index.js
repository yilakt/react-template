import React, { useState, useContext, useEffect } from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import { Colors } from '../../Theme/Colors';

import UserContext from '../../context/userContext';
import SupplierProfileContext from '../../context/supplierContext';
import UserProfileContext from '../../context/userProfileContext';

import ReactGA from 'react-ga';
import { useHistory } from "react-router-dom";
import amplitude from 'amplitude-js';
import firebase from 'firebase';
import Spinner from "react-spinkit";
import { Button } from '@material-ui/core';

ReactGA.initialize(process.env.REACT_APP_GA_SECRET);

const Home = () => {
  const { user, setUserContext } = useContext(UserContext);
  const { userProfile, setUserProfileContext } = useContext(UserProfileContext);
  const [ pageLoading, setPageLoading ] = useState(true);
  const history = useHistory()

  useEffect(() => {
    setPageLoading(true)
  },[])

  if(pageLoading) {
    return(
      <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Spinner name="folding-cube" color="#635BFF" />
      </div>
    )
  };

  return (
    <div style={{ backgroundColor: Colors.greyTint }}>
      
    </div>
  );
}

const styles = {
  optionContainer: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  }
};

export default Home;