import React from 'react';
import { BrowserRouter } from "react-router-dom";
 import Route from "./Route" // TODO having an issue with node sitemap-builder.js (used to create sitemap.xml)
// PAGES
import Dashboard from '../pages/Home';
import Error from '../pages/Error';
import Terms from '../pages/Terms';
import Profile from '../pages/Profile';
import Loading from '../pages/Loading';
import history from '../services/history';
import FrequentlyAskedQuestions from '../pages/FrequentlyAskedQuestions';

function Routes() {
    return(
        <BrowserRouter history={history}>
            <Route path="/" exact component={Loading} /> 
            <Route path="/home" exact component={Dashboard} /> 
            {/* IF YOU WANT USERS TO LOGIN BEFORE US TURN isPrivate on & configure in Route.js */}
            {/* <Route path="/" exact component={Dashboard} isPrivate/> */}
            <Route path="/terms/" component={Terms} />
            <Route path="/profile/" component={Profile}/>
            <Route path="/faq/" component={FrequentlyAskedQuestions} />
            {/* TODO add this back, error now it shows on all pages ever since adding context wrapper in app.js */}
            {/* <Route component={Error} /> */}
        </BrowserRouter>
    )
}

export default Routes;