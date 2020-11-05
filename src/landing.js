import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink 
  } from "react-router-dom";

  import logo from './pictures/logo.png'
  import lock from './pictures/lock.png'

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
   // return (<div className="wrapper"><NavLink to={`/plaidLink?token=${this.props.queryParms.token}`}><button onMouseDown={this.mouseDown}  className={`${this.state.landingButton} ${this.state.color} `} >Create Account</button></NavLink></div>) 
      return(
        <div class="page_wrap">
        
        <div className="container">
            <div className="container_wrap container_wrap_one">
                <div className="content_wrap">
                   { <h5></h5>}
                    <h6> As we progress into a more automated world of technology, the risk of having your personal information compromised is on the rise. At SCS, we take handling of your sensitive information seriously. Linking your personal and SCS accounts through PLAID will avoid sharing sensitive account information..</h6>
                    <p><img src={lock} alt="" />Protected by bank-level security</p>
                </div>
            </div>

            <div className="container_wrap container_wrap_two">
                <div className="content_wrap">
                <NavLink to={`/plaidLink?token=${this.props.queryParms.token}`}><button onMouseDown={this.mouseDown}>Create account</button></NavLink>
                </div>
            </div>

        </div>

    </div>
      )
    
  }
}


  


export default Landing;
