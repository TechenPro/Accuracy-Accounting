import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import MobileMenu from "./mobileMenu"

export default class header extends Component {
    constructor() {
        super()
        this.state ={
            menuStatus: "Open",
            menuStyles: {
                "top": "-280px",
            }
        }

        this.menuClick = this.menuClick.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.openMenu = this.openMenu.bind(this)
    }



    closeMenu() {
        this.setState({
            menuStatus: "Open",
            menuStyles: {
                "top": "-280px"
            }
        })
    }

    openMenu() {
        this.setState({
            menuStyles: {
                "top": "50px"
            }
        })
    }

    menuClick() {
        if (this.state.menuStatus === "Open") {
            this.setState({
                menuStatus: "Close"
            })
        } else {
            this.closeMenu()
            this.setState({
                menuHeight: 0
            })
        }
    }

    render() {
        return (
            <div className="header-wrapper">
                <div className = 'header-btn-holder'>
                    <div className="mobile-nav" onClick={this.menuClick}>
                        {this.state.menuStatus === "Open" ?
                        <FontAwesomeIcon icon="bars" onClick={this.openMenu} />
                        :
                        <FontAwesomeIcon icon="times" />
                    }
                    </div>

                    < div className='header-btn-holder-left' >
                        
                        <NavLink className='header-btn' to="/services" > Services </NavLink>
                        <NavLink className = 'header-btn' to = "/insights" > Insights </NavLink>
                        <NavLink className='header-btn' to="/client-schedular">Schedule A Time</NavLink>
                    </div>

                    <NavLink className='header-center-logo' to="/" onClick={this.closeMenu}>
                        < img src = './assets/header-logo.png'></img>
                    </NavLink>

                    < div className='header-btn-holder-right' >
                        <NavLink className='header-btn' to="/about">About</NavLink>
                        <NavLink className='header-btn' to="/contact">Contact</NavLink>
                        <NavLink className='header-btn' to="/login">Client Login</NavLink>
                    </div>
                </div>
                
                {/* {this.state.menuStatus === "Close" ? */}
                <div className="mobile-menu-wrapper">
                    <MobileMenu 
                     closeMenu = {this.closeMenu}
                     menuStyles = {this.state.menuStyles} />
                </div>
                {/* :
                <div className="mobile-menu-wrapper"></div> */}
                {/* } */}
                
            </div>
            )
        }
    }
 