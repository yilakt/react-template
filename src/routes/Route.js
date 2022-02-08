import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';


export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = false; // is user sign in or not
    // Route is private & user is not logged in
    if(isPrivate && !signed){
        return <Redirect to="/register" />
    }
    // Route is public and the user is logged in
    if(!isPrivate && signed){
        return <Redirect to="/loading/"/>
    }
    return <Route { ... rest } component={Component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}
RouteWrapper.defaultProps = {
    isPrivate: false
}