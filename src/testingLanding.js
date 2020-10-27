import React, { Component } from 'react';
import logo from './pictures/logo.png'
import lock from './pictures/lock.png'

class TestLanding extends React.Component {

    render() {
        return <div class="page_wrap">
            <header className="header" id="myHeader">
                <img src={logo} alt="" className="logo"></img>
            </header>
            <div className="container">
                <div className="container_wrap container_wrap_one">
                    <div className="content_wrap">
                        <h5>Create acount</h5>
                        <h6>security message here....</h6>
                        <p><img src={lock} alt="" />Protected by bank-level security</p>
                    </div>
                </div>

                <div className="container_wrap container_wrap_two">
                    <div className="content_wrap">
                        <button onMouseDown={this.mouseDown}>Create acount</button>
                    </div>
                </div>

            </div>

        </div>

    }
}

export default TestLanding;