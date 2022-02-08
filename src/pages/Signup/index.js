import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Styles } from "./Styles.js";
import { isMobile } from "react-device-detect";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import Spinner from "react-spinkit";
import toast from "react-simple-toasts";
import amplitude from "amplitude-js";

import HeaderBar from "../../components/HeaderBar";

amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE_SECRET);

function Signup() {
  const history = useHistory();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  let [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const signupUser = () => {
    if (!email || !password || !firstName || !lastName) {
      toast("Missing required fields.", 3000);
      setLoading(false);
      return;
    }
    email = email.trim();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((authData) => {
        firebase.database().ref('users/' + authData.user.uid).set({
            firstName:firstName,
            lastName:lastName,
            isNewUser: authData.additionalUserInfo.isNewUser,
            email:authData.user.email,
            uid: authData.user.uid,
            address: "",
            selectedMetric: 'mi',
            selectedCountry: 'both',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/simplydiy-ad5ef.appspot.com/o/defaultProfileImg.png?alt=media&token=b0ddfeaf-8571-42fd-a737-254370a9c6e0'
        })
        amplitude.getInstance().logEvent("signup_success")
        loginUser()
      }).catch((_error) => {
        console.log("Firebase Signup Failed", _error);
        toast("Oops! Your password is not strong enough.", 3000);
        setLoading(false);
      })
  };

  const loginUser = () => {
    const emailUpdated = email.trim();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailUpdated, password)
      .then((authData) => {
        amplitude.getInstance().logEvent("login_success")
        toast("Successfully created account", 3000)
        history.push("/");
      })
      .catch((_error) => {
        alert("Wrong username/password");
      });
  };

  if (isMobile) {
    return (
      <div style={Styles.mobileContainer}>
        <div style={Styles.mobileContentContainer}></div>
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <div style={styles.topContainer}>
        <HeaderBar showLogout={false}/>
      </div>
      <div style={styles.bottomContainer}>
        <h1 style={{ textAlign: "center" }}>Create an account</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "55vw",
            marginBottom: "3vh",
          }}
        >
          <TextField
            id="firstName"
            label="First name"
            variant="outlined"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              marginTop: 0,
              width: "25vw",
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="lastName"
            label="Last name"
            variant="outlined"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              marginTop: 0,
              width: "25vw",
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "55vw",
          }}
        >
          <TextField
            id="email_id"
            label="Email"
            variant="outlined"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              marginTop: 0,
              width: "25vw",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password_id"
            label="Password"
            variant="outlined"
            type="password"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              marginTop: 0,
              width: "25vw",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          {loading ? (
            <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
              <Spinner name="folding-cube" color="#635BFF" />
            </div>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                width: "35vw",
                height: "60%",
                marginTop: "5vh",
                marginBottom: "5vh",
              }}
              onClick={() => {
                setLoading(true);
                signupUser();
              }}
            >
              <p style={{ color: "white" }}>Create account</p>
            </Button>
          )}
          <div onClick={() => history.push("/login")}>
            <p style={{ cursor: "pointer", color: "#3f51b5" }}>
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    backgroundImage: `url('./bannerSignup_1.jpg')`,
    width: "100vw",
    height: "40vh",
    backgroundSize: "cover",
  },
  bottomContainer: {
    width: "100vw",
    height: "60vh",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
};

export default Signup;
