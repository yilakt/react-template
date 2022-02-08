import React, { useState, useContext } from "react";

import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import toast from "react-simple-toasts";
import {isMobile} from 'react-device-detect';
import { Colors } from '../Theme/Colors';

import { signout } from '../util/firebaseMethods';
import { Theme } from '../Theme/Helpers';
import { Nav, NavDropdown, Dropdown, Navbar, Container } from 'react-bootstrap';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const Header = ({ getLocation, user, userProfile, supplierProfile }) => {
  const history = useHistory();

  return (
    <div style={styles.container}>
      <div style={styles.headerStyle}>
        <div
          onClick={() => history.push("/")}
          style={styles.logoContainer}
        >
          <img
            src="../../logo_long_text.png"
            style={{ width: 175, height: 50, paddingRight: 5 }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? 'column' : "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {user 
        ? <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg" >
              <Container fluid>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown eventKey={1} 
                        title={
                            <div style={{cursor:'pointer', flexDirection:'row', display:'flex', alignItems:'center'}}>
                                <div style={{ position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'1vw', alignItems:'flex-end'}}>
                                  <p style={{padding:0, margin:0}}>Welcome back</p>
                                  <p style={{padding:0, margin:0, fontWeight:'bold'}}>{userProfile?.firstName}</p>
                                </div>
                                <img className="thumbnail-small" 
                                    src={'../../defaultProfileImg.png'} 
                                    style={cssAsJs.imageTrigger}
                                    alt="user pic"
                                />
                                {userProfile?.activeOrder && 
                                <div 
                                style={{cursor:'pointer', border: "1px solid #ccc", borderRadius:8, display:'flex', flexDirection:'column', marginLeft:10, paddingLeft:5, paddingRight:5, paddingTop:5, paddingBottom:5, justifyContent:'center', alignItems:'center'}}
                                onClick={()=> history.push('/checkout')}>
                                  <ShoppingCartSharpIcon style={{fontSize:20, color:Colors.primaryGreen}}/>
                                  <p style={{padding:0, margin:0, fontSize:18}}>Checkout</p>
                                </div>
                                }
                            </div>
                          } 
                        drop="down"
                        id="basic-nav-dropdown"
                        menuVariant="dark">
                          <NavDropdown.Item eventKey={1} style={{cursor:'pointer'}} onClick={()=> history.push('/profile')}>Profile</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item eventKey={2} style={{cursor:'pointer'}} onClick={()=> history.push('/profile')}>Past Orders</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item eventKey={4} style={{cursor:'pointer'}} onClick={()=> signout()}>Logout</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
        : 
          <>
          <Button
            style={{ backgroundColor: "#E54D32", marginRight: '.5vw' }}
            onClick={() => console.log("OPEN MODAL")}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
          <Button
            style={{ backgroundColor: Colors.standardPurple }}
            onClick={() => console.log("OPEN MODAL")}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Signup
          </Button>
          </>
        }
      </div>
    </div>
  );
};

export default Header;

const cssAsJs = {
  imageTrigger: {
    height: 40,
    width: 40,
    cursor: 'pointer',
    border: 'none',
    borderRadius: 20,
  },
}

const styles = {
  container: {
    display: "flex",
    flexDirection: isMobile ? 'column' : "row",
    borderBottom: "0px solid #ccc",
    justifyContent: isMobile ? 'center' : "space-between",
    alignItems: isMobile ? 'center' : null,
    ...Theme.container,
    backgroundColor: 'white'
  },
  mobileContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "0px solid #ccc",
    justifyContent: "space-between",
    ...Theme.container,
  },
  containerMobile: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderBottom: "0px solid #ccc",
    justifyContent: "space-between",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  headerStyle: {
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center', 
    paddingTop: 8,
    paddingBottom: 8,
  },
  logoContainer: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    cursor:'pointer',
  }
};
