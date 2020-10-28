import React, { Component } from 'react';
import warning from './pictures/warning.png'

  class Exited extends React.Component {

    render() {
        return ( <div class="page_wrap">
              
        <div className="container">
          <div className="container_wrap container_wrap_one successStyle" >
            <div className="content_wrap success_img" >
            <img src={warning} alt="" width="50"/>
              <p className="success_para">Exited the link token flow <br></br>Please contact an SCS representative for assistance</p>
            </div>
          </div>
        </div>
      </div>) 
          
        
      }
  }

  export default Exited;