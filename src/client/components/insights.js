import React, { Component } from 'react';

import Header from './homePage/header';
import Footer from './homePage/footer';
import ImageLink from './homePage/imageLink';

export default class insights extends Component {
    render() {
        return [
            <Header />, <div className='headerSpacer'></div>,

            <div className='legal'>
                404 
            </div>,

            <Footer />
        ]
    }
}
