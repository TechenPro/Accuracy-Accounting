import React, { Component } from 'react';


import { NavLink } from "react-router-dom"

export default class industryCard extends Component {
    render() {
        return [

            <NavLink className='industryCard' to={this.props.linkUrl}>
                <div className='card-description'>
                    {this.props.description}    
                </div>
                <div className='card-img'>
                    <img
                        src = {this.props.url}
                       // linkUrl={this.props.link}
                    />
                <div className='card-txt'>
                    {this.props.title}
                </div>
                </div>
            </NavLink>          

        ]
    }
}
