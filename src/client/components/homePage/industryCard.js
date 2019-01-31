import React, { Component } from 'react';

import Header from './header';
import ImageLink from './imageLink';

export default class industryCard extends Component {
    render() {
        return [

            <a className='industryCard' href={this.props.linkUrl}>
                <div className='card-description'>
                    {this.props.description}    
                </div>
                <div className='card-img'>
                    <ImageLink
                        imageurl = {this.props.url}
                       // linkUrl={this.props.link}
                    />
                <div className='card-txt'>
                    {this.props.title}
                </div>
                </div>
            </a>          

        ]
    }
}
