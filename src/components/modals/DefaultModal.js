import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Fonts, Theme } from '../Theme/Helpers';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Checkbox, TextField } from '@material-ui/core';
import toast from "react-simple-toasts";
import { updateFirebaseDB } from '../util/firebaseMethods';

const DefaultModal = ({
    showVal,
    closeModal,
    user,
    activeVal
}) => {

    const [fullName, setFullName] = useState(null);
    const [address, setAddress] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zipcode, setZipcode] = useState(null);

    useEffect(() => {
        if(activeVal) {
            setFullName(activeVal.fullName)
            setAddress(activeVal.address)
            setPhoneNumber(activeVal.phoneNumber)
            setCity(activeVal.city)
            setState(activeVal.state)
            setZipcode(activeVal.zipcode)
        }
    },[])
    
    const handleSubmit = () => {
        if(!fullName || !address || !phoneNumber || !city || !state || !zipcode) {
            toast("Missing required field/s", 3000);
            return;
        }
        updateFirebaseDB(`/users/${user.uid}/orderShippingAddress`, {
            fullName,
            address,
            phoneNumber,
            city,
            state,
            zipcode
        })
        closeModal()
    }

    const renderHeader = () => {
        return(
            <div style={{display:'flex', height: '10%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <p style={{...Fonts.headerText, marginTop: 0}}>Adding Shipping Address</p>
                <div style={{cursor:'pointer'}} 
                onClick={()=> closeModal()}>
                    <CloseIcon />
                </div>
            </div>
        )
    }

    const renderInputFields = () => {
        return(
            <div style={{ paddingTop: '3vh', height: '70%' }}>
                <TextField
                    id="outlined-basic"
                    label="Full name"
                    variant="outlined"
                    style={{width:'100%'}}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone number"
                    variant="outlined"
                    style={{width:'100%', marginTop: '2vh'}}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    style={{width:'100%', marginTop: '2vh'}}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{width:'30%', marginTop: '2vh'}}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="State"
                    variant="outlined"
                    style={{width:'30%', marginTop: '2vh'}}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Zipcode"
                    variant="outlined"
                    style={{width:'30%', marginTop: '2vh'}}
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />
                </div>
            </div>
        )
    }
    return (
        <Modal
        isOpen={showVal}
        onRequestClose={()=> closeModal()}
        style={customStyles}
        contentLabel="Pickup Orders Configuration"
        overlay={{}}
        >
            <div style={{ height: '100%' }}>
                {renderHeader()}
                {renderInputFields()}
                <div style={{ display: 'flex', height:'10%', alignItems:'flex-end', justifyContent:'flex-end'}}>
                    <Button 
                        onClick={()=> handleSubmit()}
                        type="submit"
                        variant="contained"
                        color="primary" >
                        Use this address
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

const customStyles = {
    overlay: {
        backgroundColor: "#CCC",
    },
    content : {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        top                   : '50%',
        left                  : '50%',
        width                 : '70%',
        height                : '60%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        borderRadius          : 8
    }
};

export default DefaultModal