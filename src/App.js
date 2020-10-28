import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Landing from './landing.js'
import SignUp from './SignUp.js'

import Auth from './authenticate'

import PlaidLink from './linkPlaid.js'
import Success from './success.js'
import TestLanding from './testingLanding.js'
import TestSuccess from './testSuccess'
import logo from './pictures/logo.png'

import './App.css';

class App extends React.Component {



  render() {
    console.log('react')
    return (<>
      <header className="header myMargin" >
        <img src={logo} alt="" className="logo" />
      </header>

      <Router>

        <Route exact path='/' component={Auth}></Route>
        <Switch>


          <Route exact path='/plaidLink' component={PlaidLink}></Route>

          <Route path="/success" >
            <Success />
          </Route>

          <Route path="/home/">
            <Landing />
          </Route>

          <Route path="/testLanding">
            <TestLanding />
          </Route>

          <Route path="/TestSuccess">
            <TestSuccess />
          </Route>


        </Switch>
      </Router>

    </>)


  }
}





export default App;
