import React, { Component } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <div className='layout-grid'>

                {this.props.children}
                
            </div>
        )
    }
}
