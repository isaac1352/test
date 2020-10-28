import React, { Component } from 'react';
import logo from './pictures/logo.png'
import check from './pictures/ticki.png'

class Success extends React.Component {

  render() {
    // return <div className="wrapperSuccess"></div> 

    return (
      <div class="page_wrap">
       
        <div className="container">
          <div className="container_wrap container_wrap_one successStyle" >
            <div className="content_wrap success_img" >
              <img src={check} alt="" />
              <p className="success_para">Thank you. <br></br>Your account was successfully<br></br>
                  linked to this application.</p>
            </div>
          </div>
        </div>
      </div>)


  }
}

export default Success;