import React, { Component } from 'react';

import ImageLink from './imageLink';
import Header from './header';
import IndustryCard from './industryCard';
import Footer from './footer';


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
                   
           <Footer />
        ]
    }
}
