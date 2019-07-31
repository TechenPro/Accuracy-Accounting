import React, { Component } from 'react';

import Header from './homePage/header';
import Footer from './homePage/footer';

export default class Layout extends Component {
    render() {
        return (
            <div className='layout-grid'>
                {/* <Header/>
                {this.props.children}
                <Footer/> */}
            </div>
        )
    }
}
