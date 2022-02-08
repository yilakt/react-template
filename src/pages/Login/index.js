import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import firebase from "firebase"
import { useHistory } from "react-router-dom";
import toast from "react-simple-toasts";

import HeaderBar from '../../components/HeaderBar';
import { Theme } from '../../Theme/Helpers';

const Login = ({}) => {
  const history = useHistory();

  const[email, setEmail] = useState(null);
  const[password, setPassword] = useState(null);

  const loginUser = () => {
    const emailUpdated = email.trim()
    firebase.auth().signInWithEmailAndPassword(emailUpdated,password).then((authData) => {
        // amplitude.getInstance().logEvent("login_success")
        history.push('/');
    }).catch((_error) => {
      toast("Wrong email or password.", 3000)
    })
  }

  return (
    <div style={styles.container}>
      <div style={styles.topContainer}>
        <HeaderBar showLogout={false} addPadding/>
      </div>      
      <div style={styles.bottomContainer}>
        <h1 style={{textAlign:'center'}}>Login</h1>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'55vw' }}>
              <TextField id="email_id" 
              label="Email"
              variant="outlined"
              style={{backgroundColor:'white', borderRadius: 5, justifyContent:'center', marginTop:0,  width: '25vw'}} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <TextField id="password_id" 
              label="Password"
              variant="outlined"
              type="password"
              style={{backgroundColor:'white', borderRadius: 5, justifyContent:'center', marginTop:0,  width: '25vw'}} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div style={{display:'flex', flexDirection:'column',  justifyContent:'space-evenly', alignItems:'center', width:'100%'}}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{width:"35vw", height:'60%', marginTop: '5vh', marginBottom: '5vh'}}
                  onClick={()=>loginUser()}>
                      <p style={{color:'white'}}>LOGIN</p>
              </Button>
              <div onClick={()=> toast('Please email us - hello@farmsthatship.com')}>
                <p style={{cursor:'pointer'}}>Forgot email or password</p>
              </div>
              <div onClick={()=>history.push("/signup")}>
                <p style={{cursor:'pointer', color: '#3f51b5'}}>Dont have an account? Sign up</p>
              </div>
          </div>
      </div>
    </div>
  );
};

const styles = {
  container:{
    display:'flex',
    flexDirection:'column',
    width:'100vw', 
    height:'100vh',
    justifyContent:'center', 
    alignItems:'center',
  },
  topContainer: {
    backgroundImage: `url('./background8.jpg')`,
    width:'100vw',
    height:'40vh',
    backgroundSize: 'contain',
  },
  bottomContainer: {
    width: '100vw', 
    height: '60vh', 
    alignItems:'center', 
    display:'flex', 
    flexDirection:'column'
  }
}


export default Login;

