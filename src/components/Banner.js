import React, { useState, useEffect, useContext } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import toast from 'react-simple-toasts';
import UserContext from '../context/userContext';
import UserProfileContext from '../context/userProfileContext';
import SupplierProfileContext from '../context/supplierContext';
import TextField from "@material-ui/core/TextField";
import { isMobile } from 'react-device-detect';

// import { Styles } from './Styles';

function Banner({ searchAddress, useProfile }) {
    const [bannerImg, setBannerImg] = useState(1);

    const { user } = useContext(UserContext);
    const { userProfile } = useContext(UserProfileContext);
    const { supplierProfile } = useContext(SupplierProfileContext);
    const [ searchInput ,setSearchInput ] = useState(null);

    useEffect(() => {
        setInterval(() => {
            setBannerImg(bannerImg => bannerImg === 3 ? 1 : bannerImg + 1);
        }, 15000);
    }, [])

    return (
        <div style={styles.bannerSignupContainer}>
            <div style={{
                width: '100vw',
                height: '80vh',
                paddingBottom: '3vh',
                aspectRatio: 1,
                backgroundImage: `url('./bannerSignup_${bannerImg}.jpg')`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={styles.leftSection}>
                    <p style={{color:'black', fontSize: isMobile ? 24:32, fontWeight: '600', textAlign: 'center' }}>Order food direct from farms.</p>
                    <TextField
                        id="outlined-basic"
                        label="Enter your address to calculate shipping"
                        variant="outlined"
                        style={{
                            backgroundColor: "white",
                            borderRadius: 5,
                            justifyContent: "center",
                            width: isMobile ? '100%' : "60%",
                        }}
                        size="small"
                        value={searchInput === null 
                            ? userProfile?.searchAddress
                            : searchInput
                        }
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                              searchAddress(searchInput)
                              ev.preventDefault();
                            }
                          }}
                        />
                    <p style={{color:'black', fontSize: isMobile ? 14 : 20, fontWeight: '600', textAlign: 'center'}}>Find organic & pastured raised foods produced by farms in USA.</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    bannerSignupContainer: {
        display:'flex', 
        flexDirection: 'column',
        justifyContent:'center', 
        alignItems:'center',
    },
    leftSection:{
        width:'50%', 
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
}

export default Banner;