import React, { Component } from 'react'
import { NavLink } from "react-router-dom"


export default class className extends Component {
    constructor() {
        super()
        this.state = {
            mobileMenuOpen: false
        }

        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }

    openNav() {
        console.log("open nav")
        this.setState({
            mobileMenuOpen: true
        })
    }

    closeNav() {
        console.log("close nav")
        this.setState({
            mobileMenuOpen: false
        })
    }

    render() {
        return ( 

            <div className="nav-content">
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/services">Insights</NavLink>
                <NavLink to="/services">Schedule A Time</NavLink>
                <NavLink to="/services">About</NavLink>
                <NavLink to="/services">Contact</NavLink>
                <NavLink to="/services">CLient Login</NavLink>
            </div>
        )
    }
}