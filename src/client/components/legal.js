import React, { Component } from 'react';

import Header from './homePage/header';
import Footer from './homePage/footer';
import ImageLink from './homePage/imageLink';


export default class legal extends Component {
    render() {
        return [
            <Header />, <div className='headerSpacer'></div>,

                <div className='legal'>
                    <div className='heading'>
                        Legal and Copyright Information
                    </div>

                    <div className='legal-info'>
                        All images found on this page were found at 
                        < a className = 'legal-link'
                        href = 'https://www.pexels.com' > Pexels</a>, <a href="https://kisspng.com" className = 'legal-link'>KissPNG</a>, and <a href="https://clker.com" className = 'legal-link'>Cliker </a>
                        and are used in accordance with their terms and services.
                        <br /><br />
                        React and Redux are used in accordance with MIT's open source license.
                        <br /><br />
                        The opening animation was created by Joshua Krohn and can be found 
                        <a className='legal-link' href='https://dribbble.com/shots/1888419-Animated-Graph'> here.</a>
                        <br/><br/>
                        The login animation was created by the user Dribbble on Pintrest and can be found < a href = 'https://www.pinterest.com/pin/98234835596258020/' className = 'legal-link'> here.</a>
                    </div>

                </div>,
            <Footer />
        ]
    }
}
