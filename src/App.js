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



import Imgs from './imgs'
import './App.css';

class App extends React.Component {

 
 
  render() {
      console.log('react')
    return (

      
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

          
          </Switch>
         </Router>
    
    )

         
  }
}


  


export default App;
