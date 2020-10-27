import React, { Component } from 'react';
import logo from './pictures/logo.png'


 function Error(props){
console.log('in the error')
   
      //  return <div className={props.message}><img src></img></div> 
        return (
            <div class="page_wrap">
              <header className="header myMargin" >
                <img src={logo} alt="" className="logo" />
              </header>
              <div className="container">
                <div className="container_wrap container_wrap_one successStyle" >
                  <div className="content_wrap success_img" >
                    
                    <p className="success_para">This is an {props.message} Token <br></br>Please contact SCS representative for assistance</p>
                  </div>
                </div>
              </div>
            </div>)     
        
     
  }

  export default Error;