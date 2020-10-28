import React, { Component } from 'react';
import logo from './pictures/logo.png'
import warning from './pictures/warning.png'


 function Error(props){

      console.log('you are in')
console.log('in the error')
   
      //  return <div className={props.message}><img src></img></div> 
        return (
            <div class="page_wrap">
              
              <div className="container">
                <div className="container_wrap container_wrap_one successStyle" >
                  <div className="content_wrap success_img" >
                  <img src={warning} alt="" width="50"/>
                    <p className="success_para">This is an {props.message} Token <br></br>Please contact an SCS representative for assistance</p>
                  </div>
                </div>
              </div>
            </div>)     
        
     
  }

  export default Error;