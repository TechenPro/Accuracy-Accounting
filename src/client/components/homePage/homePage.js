import React, { Component } from 'react';

import ImageLink from './imageLink';
import Header from './header';
import IndustryCard from './industryCard';


export default class homePage extends Component {
    render() {
        return [
            <Header/>,
            <div className='city'>
                <ImageLink
                    imageurl='https://www.thetimes.co.uk/travel/s3/growthtravel-prod/uploads/2017/11/Hong_Kong_Cedric009-1500x792.jpg'
                /> 
            
            </div>,           

            <div className='home-page'>
                
            </div>,

            <div className='title-services'>
                Services
            </div>,

            <div className='survaces-columns'>
                    <div className='survaces'>
                        <h1>TAXES</h1>
                        <ImageLink
                            imageurl='https://bfba.com/wp-content/uploads/2017/10/bfba_Tax-Icon-Blue.png'
                            linkUrl='/'
                        />
                    </div>

                    <div className='survaces'>
                        <h1>ASSURANCE</h1>
                        <ImageLink
                            imageurl='https://bfba.com/wp-content/uploads/2017/10/bfba_Assuance-Icon-Blue.png'
                            linkUrl='/'
                        />
                    </div>

                    <div className='survaces'>
                        <h1>ADVISORY</h1>
                        <ImageLink
                            imageurl='https://bfba.com/wp-content/uploads/2017/10/bfba_Advisory-Icon-Blue.png'
                            linkUrl='/'
                        />
                    </div>
            </div>,

            <div className='title-industries'>
                Industries
            </div>,

            <IndustryCard/>,
            <br/>,
            <IndustryCard />,
            <br />,
            <IndustryCard />,






            <div className='footer'>
                <div className='footer-txt'>
                    <h1>Contact Us</h1><hr/>
                    <br />
                    <h4>Phone: 1800-867-309</h4>
                    <h4>Email: dog@example.com</h4>
                    <h4>Fax: 1800-867-3101</h4>
                    <h4>Address: 19 Pennsylvania ave</h4>
                    <br /><br />
                 </div>

                <div className='footer-txt'>
                    <h1>Navigation</h1><hr />
                    <br />
                    <h4>Services</h4>
                    <h4>Industry</h4>
                    <h4>Careers</h4>
                    <h4>Insights</h4>
                    <h4>About</h4>
                    <h4>Contact</h4>
                    <h4>Client Login</h4>
                </div>

                <div className='footer-txt'>
                    <h1>Recent Insights</h1><hr />
                    <br />
                    <h4>2018-2019 Tax Planning Guide</h4>
                    <h4>In The News: Mapping the Next Move</h4>
                    <h4>Using Deferred Compensation Techniques To Meet Your Business Needs</h4>
                    <h4>How to Ensure Employee Loyalty in a Competitive Job Market</h4>
                    <h4>Intern Insights: The Importance of Culture</h4>
                </div>
             
             </div>
            
        
           
        ]
    }
}




// crosshair img:    https://www.wpclipart.com/signs_symbol/targets/crosshair/crosshair_1_large.png
// city img:         https://www.thetimes.co.uk/travel/s3/growthtravel-prod/uploads/2017/11/Hong_Kong_Cedric009-1500x792.jpg