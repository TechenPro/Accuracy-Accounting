import React, { Component } from 'react';

export default class ImageLink extends Component {
    render() {
        return (
            <a href={this.props.linkUrl}>
                <img src={this.props.imageurl} />
                <div>
                    {this.props.text}
                </div>
            </a>
        )
    }
}
