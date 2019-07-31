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
                <NavLink to="/insights">Insights</NavLink>
                <NavLink to="/client-schedular">Schedule A Time</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">CLient Login</NavLink>
            </div>
        )
    }
}