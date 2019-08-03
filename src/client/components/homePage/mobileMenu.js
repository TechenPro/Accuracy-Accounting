import React, { Component } from 'react'
import { NavLink } from "react-router-dom"



export default class className extends Component {
    constructor(props) {
        super(props)
        
        this.closeMobileMenu = this.closeMobileMenu.bind(this)

    }

    closeMobileMenu() {
        this.props.closeMenu()
        
    }


    render() {
        return ( 

            <div className="nav-content" style= {this.props.menuStyles}>
                <NavLink activeClassName="nav-content-link" to="/" >
                    <div className="nav-content-link-holder" onClick={this.closeMobileMenu}>
                        Home
                    </div>        
                </NavLink>
                <NavLink activeClassName="nav-content-link" to="/services">
                    <div className="nav-content-link-holder" onClick={this.closeMobileMenu}>
                        Services
                    </div>        
                </NavLink>
                <NavLink activeClassName="nav-content-link" to="/insights">
                    <div className="nav-content-link-holder" onClick={this.closeMobileMenu}>
                        Insights
                    </div>        
                </NavLink>
                <NavLink activeClassName="nav-content-link" to="/client-schedular">
                    <div className="nav-content-link-holder" onClick={this.closeMobileMenu}>
                        Schedule A Time
                    </div>        
                </NavLink>
                <NavLink activeClassName="nav-content-link" to="/about">
                    <div className="nav-content-link-holder" onClick={this.closeMobileMenu}>
                        About
                    </div>        
                </NavLink>
                <NavLink activeClassName="nav-content-link" to="/contact">
                    <div className="nav-content-link-holder" onClick={this.closeMobileMenu}>
                        Contact
                    </div>        
                </NavLink>
                <NavLink activeClassName="nav-content-link" to="/login">
                    <div className="nav-content-link-holder" onClick={this.closeMobileMenu}>
                        Client Login
                    </div>        
                </NavLink>
            </div>
        )
    }
}