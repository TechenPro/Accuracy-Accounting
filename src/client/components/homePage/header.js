import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class header extends Component {
    render() {
        return (
            <div className = 'header-btn-holder'>
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
            )
        }
    }
 