import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
import { Simulate } from 'react-dom/test-utils';
const ReactRouterSetup = () => {
  return <Router>
    {/**Setting the route so that when we navigate we display that specific URL */}
    {/**Setting them as pages */}
    {/**(the route component is the homepage: the domain of your website) */}
    {/**Switch component: used because only the first page that matches is displayed */}
    <Navbar />
    <Switch>
      <Route exact path="/">
      {/**Exact prop is added to ensure that the homepage is displayed only when the exact path matched */}
      {/**Adding the pages */}
        <Home />
      </Route>
      <Route path="/about">
        {/**Adding the pages */}
        <About />
      </Route>
      <Route path="/people">
        {/**Adding the pages */}
        <People />
      </Route>
      {/**Setting the person component */}
      <Route path="/people/person/:id">
        <Person/>
      </Route>
      {/**Setting the error page */}
      {/**Add a star to mean that it will always match */}
      < Route path='*'>
        <Error />
      </Route>

    </Switch>
    
  </Router>;
};

export default ReactRouterSetup;
