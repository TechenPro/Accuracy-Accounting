import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

export default class ImageLink extends Component {
    render() {
        return (
            <NavLink className={this.props.className} to={this.props.linkUrl}>
                <img src={this.props.imageurl} />
                <div>
                    {this.props.text}
                </div>
            </NavLink>
        )
    }
}
 