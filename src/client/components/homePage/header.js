import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import MobileMenu from "./mobileMenu"

export default class header extends Component {
    constructor() {
        super()
        this.state ={
            menuStatus: "Open"
        }

        this.menuClick = this.menuClick.bind(this)
    }

    menuClick() {
        if (this.state.menuStatus === "Open") {
            this.setState({
                menuStatus: "Close"
            })
        } else {
            this.setState({
                menuStatus: "Open"
            })
        }
    }

    render() {
        return (
            <div className="header-wrappen">
                <div className = 'header-btn-holder'>
                    <div className="mobile-nav" onClick={this.menuClick}>
                        {this.state.menuStatus}
                    </div>

                    < div className='header-btn-holder-left' >
                        
                        <NavLink className='header-btn' to="/services" > Services </NavLink>
                        <NavLink className = 'header-btn' to = "/insights" > Insights </NavLink>
                        <NavLink className='header-btn' to="/client-schedular">Schedule A Time</NavLink>
                    </div>

                    <NavLink className='header-center-logo' to="/">
                        < img src = './assets/header-logo.png'></img>
                    </NavLink>

                    < div className='header-btn-holder-right' >
                        <NavLink className='header-btn' to="/about">About</NavLink>
                        <NavLink className='header-btn' to="/contact">Contact</NavLink>
                        <NavLink className='header-btn' to="/login">Client Login</NavLink>
                    </div>
                </div>
                
                {this.state.menuStatus === "Close" ?
                <div className="mobile-menu-wrapper">
                    <MobileMenu />
                </div>
                :
                <div className="mobile-menu-wrapper"></div>
                }
                
            </div>
            )
        }
    }
 