import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink 
  } from "react-router-dom";

  

import './App.css';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     buttonText:"Create Account",
     pressedSpan:"landingButtonSpan",
     landingButton:"landingButton",
     color:"color"
    };
  }
  mouseDown=()=> {
    this.setState({pressedSpan: "fontLarger",color:"pressedColor"});
    
  }

  mouseUp=()=> {
    this.setState({pressedSpan: "landingButtonSpan",landingButton:"landingButton"});
  }
  render() {
    return (<div className="wrapper"><NavLink to={`/plaidLink?token=${this.props.queryParms.token}`}><button onMouseDown={this.mouseDown}  className={`${this.state.landingButton} ${this.state.color} `} >Create Account</button></NavLink></div>) 
      
    
  }
}


  


export default Landing;
